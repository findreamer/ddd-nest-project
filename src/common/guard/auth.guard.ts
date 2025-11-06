import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorator/auth-public';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly whiteList: { path: string; method: string }[] = [];
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private reflector: Reflector,
  ) {
    this.whiteList = this.configService.get('perm.router.whitelist') || [];
  }

  canActivate(context: ExecutionContext): boolean {
    // 从元数据获取是否是公共路由
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    // 白名单校验
    if (
      this.whiteList.some(
        (item) =>
          request.url.startsWith(item.path) && item.method === request.method,
      )
    ) {
      return true;
    }

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException(null, '请先登录');
    }
    try {
      const payload = this.jwtService.verify(token, {
        secret: this.configService.get('jwt.secret'),
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException(null, '登录过期，请重新登录');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
