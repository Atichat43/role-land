import { ApiProperty } from '@nestjs/swagger';

import { HttpApiDocResponse } from '../_shared/controller/docs';

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

export class AuthLoginResponse extends HttpApiDocResponse {
  @ApiProperty({ type: AuthLoginResponseData })
  public data: AuthLoginResponseData;
}

export {
  AuthLoginBody as HttpDocAuthLoginBody,
  AuthLoginResponse as HttpDocAuthLoginResponse,
};
