import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import type { Response, Request } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // 如果是 HttpException，则按原有逻辑处理
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionRes = exception.getResponse() as Record<string, any>;

      response.status(status).json({
        code: status,
        msg:
          typeof exceptionRes === 'string'
            ? exceptionRes
            : (exceptionRes.message ?? '服务器异常'),
        path: request.url,
      });
      return;
    }

    // 如果是普通 Error 或其他类型的异常，返回 500 错误
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      msg: exception instanceof Error ? exception.message : '服务器内部错误',
      path: request.url,
    });
  }
}
