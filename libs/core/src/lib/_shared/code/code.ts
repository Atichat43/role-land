export type ICodeDesc = {
  code: number;
  message: string;
};

export class Code {
  // successful codes (2xx)
  public static SUCCESS: ICodeDesc = {
    code: 200,
    message: 'Success.',
  };

  // client errors (4xx)
  public static BAD_REQUEST_ERROR: ICodeDesc = {
    code: 400,
    message: 'Bad request.',
  };

  public static UNAUTHORIZED_ERROR: ICodeDesc = {
    code: 401,
    message: 'Unauthorized error.',
  };

  public static WRONG_CREDENTIALS_ERROR: ICodeDesc = {
    code: 402,
    message: 'Wrong Credentials.',
  };

  public static ACCESS_DENIED_ERROR: ICodeDesc = {
    code: 403,
    message: 'Access denied.',
  };

  // server errors (5xx)
  public static INTERNAL_ERROR: ICodeDesc = {
    code: 500,
    message: 'Internal error.',
  };

  // custom errors (1xxx)
  public static ENTITY_NOT_FOUND_ERROR: ICodeDesc = {
    code: 1000,
    message: 'Entity not found.',
  };

  public static ENTITY_VALIDATION_ERROR: ICodeDesc = {
    code: 1001,
    message: 'Entity validation error.',
  };

  public static USE_CASE_PORT_VALIDATION_ERROR: ICodeDesc = {
    code: 1002,
    message: 'Use-case port validation error.',
  };

  public static VALUE_OBJECT_VALIDATION_ERROR: ICodeDesc = {
    code: 1003,
    message: 'Value object validation error.',
  };

  public static ENTITY_ALREADY_EXISTS_ERROR: ICodeDesc = {
    code: 1004,
    message: 'Entity already exists.',
  };
}
