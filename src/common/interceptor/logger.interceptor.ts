import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggerInterceptor.name, {
    timestamp: false,
  });
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const call$ = next.handle();
    const request = context.switchToHttp().getRequest<Request>();
    const content = `${request.method} -> ${request.url}`;
    const isSse = request.headers['accept']?.includes('text/event-stream');
    this.logger.debug(`+++ 请求${content}`);
    const now = Date.now();
    return call$.pipe(
      tap(() => {
        if (isSse) {
          return;
        }
        this.logger.debug(`--- 响应${content} ${Date.now() - now}ms`);
      }),
    );
  }
}
