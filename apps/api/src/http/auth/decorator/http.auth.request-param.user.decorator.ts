import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { IHttpAuthRequestWithUser } from '../type/http.auth.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HttpRequestParamUser: () => any = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: IHttpAuthRequestWithUser = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
