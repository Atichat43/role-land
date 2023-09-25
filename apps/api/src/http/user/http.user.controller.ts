import { Controller, Get, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { IGetUserUseCase, UserDiToken, UserUseCaseDto } from '@role-land/core';

import { ApiResponseMapper } from '../_shared/api-response/api-response.mapper';
import { HttpRequestParamUser } from '../auth/decorator';
import { IHttpAuthValidatedUser } from '../auth/type/http.auth.type';

@Controller('users')
export class HttpUserController {
  constructor(
    @Inject(UserDiToken.GetUserUseCase)
    private readonly getUserUseCase: IGetUserUseCase,
  ) {}

  @Get('me')
  @HttpCode(HttpStatus.OK)
  public async getMe(@HttpRequestParamUser() httpUser: IHttpAuthValidatedUser) {
    console.log('httpUser', httpUser);
    const user: UserUseCaseDto = await this.getUserUseCase.execute({
      userId: httpUser.id,
    });

    return ApiResponseMapper.success(user);
  }
}
