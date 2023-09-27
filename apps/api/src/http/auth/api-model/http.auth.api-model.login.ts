import { ApiProperty } from '@nestjs/swagger';

import { HttpApiModelBaseResponse } from '../../_shared/api-model';

abstract class AuthLoginBody {
  @ApiProperty({ type: 'string', default: 'username' })
  public username: string;

  @ApiProperty({ type: 'string', default: '1234' })
  public password: string;
}

abstract class AuthLoginResponseData {
  @ApiProperty({ type: 'string' })
  public id: string;

  @ApiProperty({ type: 'string' })
  public accessToken: string;
}

export abstract class AuthLoginResponse extends HttpApiModelBaseResponse {
  @ApiProperty({ type: AuthLoginResponseData })
  public data: AuthLoginResponseData;
}

export {
  AuthLoginBody as HttpApiModelAuthLoginBody,
  AuthLoginResponse as HttpApiModelAuthLoginResponse,
};
