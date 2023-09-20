import { Optional } from '@role-land/utility-types';

import { IErrorCodeDesc } from './error-code';

export type ICreateExceptionPayload<TData> = {
  code: IErrorCodeDesc;
  overrideMessage?: string;
  data?: TData;
};

export class Exception<TData> extends Error {
  public readonly code: number;

  public readonly data: Optional<TData>;

  private constructor(
    errorCodeDesc: IErrorCodeDesc,
    overrideMessage?: string,
    data?: TData,
  ) {
    super();

    this.name = this.constructor.name;
    this.code = errorCodeDesc.code;
    this.data = data;
    this.message = overrideMessage || errorCodeDesc.message;

    Error.captureStackTrace(this, this.constructor);
  }

  public static new<TData>(
    payload: ICreateExceptionPayload<TData>,
  ): Exception<TData> {
    return new Exception(payload.code, payload.overrideMessage, payload.data);
  }
}
