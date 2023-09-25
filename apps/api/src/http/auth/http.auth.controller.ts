import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

import {
  HttpAuthDocLoginApiBody,
  HttpAuthDocLoginApiResponse,
} from './http.auth.controller.docs';
import { HttpAuthService } from './http.auth.service';
import { HttpLocalAuthGuard } from './passport/local';
import { IHttpAuthRequestWithUser } from './type/http.auth.type';

@Controller('auth')
export class HttpAuthController {
  constructor(private readonly authService: HttpAuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(HttpLocalAuthGuard)
  @ApiBody({ type: HttpAuthDocLoginApiBody })
  @ApiResponse({ status: HttpStatus.OK, type: HttpAuthDocLoginApiResponse })
  async login(@Req() req: IHttpAuthRequestWithUser) {
    console.log('req', req.ip);
    console.log('req', req.body);

    return this.authService.login(req.user);
  }
}
