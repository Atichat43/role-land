import { Module } from '@nestjs/common';

import { HttpAuthService } from '../../http.auth.service';
import { HttpAuthLocalStrategy } from './http.auth.passport._local.strategy';

@Module({
  providers: [HttpAuthService, HttpAuthLocalStrategy],
})
export class HttpAuthPassportLocalModule {}
