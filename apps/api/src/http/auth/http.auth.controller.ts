import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

import { HttpApiResponseMapper } from '../_shared/api-response/http.api-response.mapper';
import {
  HttpApiModelAuthLoginBody,
  HttpApiModelAuthLoginResponse,
} from './api-model';
import { HttpAuthService } from './http.auth.service';
import { HttpDiscordAuthGuard } from './passport/discord/http.auth.passport.discord.auth-guard';
import { HttpLocalAuthGuard } from './passport/local';
import { IHttpAuthRequestWithUser } from './type';

@Controller('auth')
@ApiTags('auth')
export class HttpAuthController {
  constructor(private readonly authService: HttpAuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(HttpLocalAuthGuard)
  @ApiBody({ type: HttpApiModelAuthLoginBody })
  @ApiResponse({ status: HttpStatus.OK, type: HttpApiModelAuthLoginResponse })
  async login(@Req() req: IHttpAuthRequestWithUser) {
    return HttpApiResponseMapper.success(this.authService.login(req.user));
  }

  @Get('discord/login')
  @UseGuards(HttpDiscordAuthGuard)
  async discordLogin() {
    console.log('login discord');
    return HttpApiResponseMapper.success({ message: 'login discord' });
  }

  // after login success discord will redirect to this route with code
  // /auth/discord/redirect?code=Kx7o7DShG3kt3Vn0ZYXctUpWNIYk0m
  @Get('discord/redirect')
  @UseGuards(HttpDiscordAuthGuard)
  discordRedirect() {
    console.log('redirect discord');
    return HttpApiResponseMapper.success({ message: 'redirect discord' });
  }
}
