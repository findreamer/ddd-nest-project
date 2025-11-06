import { ResOp } from '@/model/response';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseFormatInterceptor<T>
  implements NestInterceptor<T, ResOp<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResOp<T>> {
    return next.handle().pipe(map((data) => ResOp.success(data)));
  }
}
