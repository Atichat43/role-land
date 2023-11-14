import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Session as ExpressSession } from 'express-session';

import { HttpApiResponseMapper } from '../_shared/api-response/http.api-response.mapper';
import {
  HttpApiModelAuthLoginBody,
  HttpApiModelAuthLoginResponse,
} from './api-model';
import { HttpAuthService } from './http.auth.service';
import { HttpDiscordAuthGuard } from './passport/discord/http.auth.passport.discord.auth-guard';
import { HttpAuthenticatedGuard, HttpLocalAuthGuard } from './passport/local';
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

  @UseGuards(HttpAuthenticatedGuard)
  @Get('status')
  async getStatus(@Req() req: IHttpAuthRequestWithUser) {
    return HttpApiResponseMapper.success(req.user);
  }

  @Get('session')
  async getAuthSession(@Session() session: ExpressSession) {
    console.log('session', { session, id: session.id });
    return HttpApiResponseMapper.success(session);
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
