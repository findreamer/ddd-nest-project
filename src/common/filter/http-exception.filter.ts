import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import type { Response, Request } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
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
  }
}
