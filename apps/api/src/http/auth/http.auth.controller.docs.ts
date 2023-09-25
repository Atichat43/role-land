import { ApiProperty } from '@nestjs/swagger';

import { HttpApiDocResponse } from '../_shared/controller/docs';

// login
export class HttpAuthDocLoginApiBody {
  @ApiProperty({ type: 'string', default: 'username' })
  public username: string;

  @ApiProperty({ type: 'string', default: '1234' })
  public password: string;
}

class HttpAuthDocLoginApiResponseData {
  @ApiProperty({ type: 'string' })
  public id: string;

  @ApiProperty({ type: 'string' })
  public accessToken: string;
}

export class HttpAuthDocLoginApiResponse extends HttpApiDocResponse {
  @ApiProperty({ type: HttpAuthDocLoginApiResponseData })
  public data: HttpAuthDocLoginApiResponseData;
}
