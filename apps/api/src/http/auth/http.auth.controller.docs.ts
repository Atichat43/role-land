import { ApiProperty } from '@nestjs/swagger';

import { HttpApiModelBaseResponse } from '../_shared/api-model';

class AuthLoginBody {
  @ApiProperty({ type: 'string', default: 'username' })
  public username: string;

  @ApiProperty({ type: 'string', default: '1234' })
  public password: string;
}

class AuthLoginResponseData {
  @ApiProperty({ type: 'string' })
  public id: string;

  @ApiProperty({ type: 'string' })
  public accessToken: string;
}

export class AuthLoginResponse extends HttpApiModelBaseResponse {
  @ApiProperty({ type: AuthLoginResponseData })
  public data: AuthLoginResponseData;
}

export {
  AuthLoginBody as HttpApiModelAuthLoginBody,
  AuthLoginResponse as HttpApiModelAuthLoginResponse,
};
