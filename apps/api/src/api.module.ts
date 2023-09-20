import { Module } from '@nestjs/common';

import { HttpAuthModule } from './http/auth/http.auth.module';

@Module({
  imports: [HttpAuthModule],
})
export class ApiModule {}
