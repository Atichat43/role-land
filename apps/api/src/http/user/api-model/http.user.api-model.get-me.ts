import { ApiProperty } from '@nestjs/swagger';
import { EUserRole } from '@role-land/core';

import { HttpApiModelBaseResponse } from '../../_shared/api-model';

class UserGetMeResponseData {
  @ApiProperty({
    type: 'string',
    default: '290c9ef8-c1fd-4734-9338-87d69eeXXXXX',
  })
  public id: string;

  @ApiProperty({ type: 'string', default: 'my-username' })
  public username: string;

  @ApiProperty({ enum: EUserRole, default: EUserRole.EndUser })
  public role: EUserRole;
}

class UserGetMeResponse extends HttpApiModelBaseResponse {
  @ApiProperty({ type: UserGetMeResponseData })
  public data: UserGetMeResponseData;
}

export { UserGetMeResponse as HttpApiModelUserGetMeResponse };
