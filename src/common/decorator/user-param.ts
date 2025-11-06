import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
      throw new Error('请先登录');
    }
    if (typeof data === 'string') {
      return request.user[data];
    }
    return request.user;
  },
);
