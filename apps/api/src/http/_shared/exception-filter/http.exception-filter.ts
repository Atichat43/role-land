import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Code, Exception } from '@role-land/core';
import { Request, Response } from 'express';

import { ApiEnvConfig } from '../../../api.env.config';
import { HttpApiResponseMapper } from '../api-response';

@Catch()
export class NestHttpExceptionFilter implements ExceptionFilter {
  public catch(error: Error, host: ArgumentsHost): void {
    const request: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse<Response>();

    let errorResponse: HttpApiResponseMapper<unknown> =
      HttpApiResponseMapper.error(Code.INTERNAL_ERROR.code, error.message);

    errorResponse = this.handleNestError(error, errorResponse);
    errorResponse = this.handleCoreException(error, errorResponse);

    if (ApiEnvConfig.LOG_ENABLE) {
      const message: string =
        `Method: ${request.method}; ` +
        `Path: ${request.path}; ` +
        `Error: ${errorResponse.message}`;

      // TODO: remove console.error
      console.error(error);
      Logger.error(message);
    }

    // response.status(errorResponse.code); // if we want to set status code, default is 200 Http.OK
    response.json(errorResponse);
  }

  private handleNestError(
    error: Error,
    errorResponse: HttpApiResponseMapper<unknown>,
  ): HttpApiResponseMapper<unknown> {
    if (error instanceof UnauthorizedException) {
      errorResponse = HttpApiResponseMapper.error(
        Code.UNAUTHORIZED_ERROR.code,
        Code.UNAUTHORIZED_ERROR.message,
        null,
      );

      return errorResponse;
    }

    if (error instanceof BadRequestException) {
      errorResponse = HttpApiResponseMapper.error(
        Code.BAD_REQUEST_ERROR.code,
        Code.BAD_REQUEST_ERROR.message,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error.getResponse() as any).message,
      );

      return errorResponse;
    }

    if (error instanceof HttpException) {
      errorResponse = HttpApiResponseMapper.error(
        error.getStatus(),
        error.message,
        null,
      );
    }

    return errorResponse;
  }

  private handleCoreException(
    error: Error,
    errorResponse: HttpApiResponseMapper<unknown>,
  ): HttpApiResponseMapper<unknown> {
    if (error instanceof Exception) {
      errorResponse = HttpApiResponseMapper.error(
        error.code,
        error.message,
        error.data,
      );
    }

    return errorResponse;
  }
}
