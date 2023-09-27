import {
  Controller,
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
} from './http.auth.controller.docs';
import { HttpAuthService } from './http.auth.service';
import { HttpLocalAuthGuard } from './passport/local';
import { IHttpAuthRequestWithUser } from './type/http.auth.type';

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
}
