import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpApiResponseMapper } from '../api-response';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<HttpApiResponseMapper<void>> {
    const request: Request = context.switchToHttp().getRequest();
    const requestStartDate: number = Date.now();

    return next.handle().pipe(
      tap((): void => {
        const requestFinishDate: number = Date.now();

        const message: string =
          `Method: ${request.method}; ` +
          `Path: ${request.path}; ` +
          `SpentTime: ${requestFinishDate - requestStartDate}ms`;

        Logger.log(message, HttpLoggingInterceptor.name);
      }),
    );
  }
}
