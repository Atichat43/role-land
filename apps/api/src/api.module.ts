import { Module } from '@nestjs/common';

import { HttpAuthModule } from './http/auth/http.auth.module';
import { HttpUserModule } from './http/user/http.user.module';

@Module({
  imports: [HttpAuthModule, HttpUserModule],
})
export class ApiModule {}
