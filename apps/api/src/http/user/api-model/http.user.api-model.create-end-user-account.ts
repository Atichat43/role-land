import { ApiProperty } from '@nestjs/swagger';

import { HttpApiModelBaseResponse } from '../../_shared/api-model';

abstract class UserCreateEndUserAccountBody {
  @ApiProperty({ type: 'string' })
  public username: string;

  @ApiProperty({ type: 'string' })
  public password: string;
}

abstract class UserCreateEndUserAccountResponseData {
  @ApiProperty({
    type: 'string',
    default: '290c9ef8-c1fd-4734-9338-87d69eeXXXXX',
  })
  public id: string;
}

abstract class UserCreateEndUserAccountResponse extends HttpApiModelBaseResponse {
  @ApiProperty({ type: UserCreateEndUserAccountResponseData })
  public data: UserCreateEndUserAccountResponseData;
}

export {
  UserCreateEndUserAccountBody as HttpApiModelUserCreateEndUserAccountBody,
  UserCreateEndUserAccountResponse as HttpApiModelUserCreateEndUserAccountResponse,
};
