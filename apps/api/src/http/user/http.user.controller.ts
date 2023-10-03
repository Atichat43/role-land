import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  ICreateUserUseCase,
  IGetUserUseCase,
  UserDiToken,
  UserUseCaseDto,
} from '@role-land/core';

import { HttpApiResponseMapper } from '../_shared/api-response/http.api-response.mapper';
import { HttpRequestParamUser } from '../auth/decorator';
import { HttpAuthGuard } from '../auth/decorator/http.auth.guard.decorator';
import { IHttpAuthValidatedUser } from '../auth/type';
import {
  HttpApiModelUserCreateEndUserAccountBody,
  HttpApiModelUserCreateEndUserAccountResponse,
  HttpApiModelUserGetMeResponse,
} from './api-model';
import {
  CreateEndUserAccountDtoBody,
  CreateEndUserAccountDtoResponseData,
} from './dto';

@Controller('users')
@ApiTags('users')
export class HttpUserController {
  constructor(
    @Inject(UserDiToken.GetUserUseCase)
    private readonly getUserUseCase: IGetUserUseCase,
    @Inject(UserDiToken.CreateUserUseCase)
    private readonly createUserUseCase: ICreateUserUseCase,
  ) {}

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @HttpAuthGuard()
  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, type: HttpApiModelUserGetMeResponse })
  public async getMe(
    @HttpRequestParamUser() httpUser: IHttpAuthValidatedUser,
  ): Promise<HttpApiResponseMapper<UserUseCaseDto>> {
    const user: UserUseCaseDto = await this.getUserUseCase.execute({
      userId: httpUser.id,
    });

    return HttpApiResponseMapper.success(user);
  }

  @Post('account')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiBody({ type: HttpApiModelUserCreateEndUserAccountBody })
  @ApiResponse({
    status: HttpStatus.OK,
    type: HttpApiModelUserCreateEndUserAccountResponse,
  })
  public async createEndUserAccount(
    @Body() body: CreateEndUserAccountDtoBody,
  ): Promise<HttpApiResponseMapper<CreateEndUserAccountDtoResponseData>> {
    const createdUser: UserUseCaseDto = await this.createUserUseCase.execute({
      username: body.username,
      password: body.password,
    });

    return HttpApiResponseMapper.success(createdUser);
  }
}
