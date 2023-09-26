import { Module } from '@nestjs/common';

import { InfrastructureModule } from './di';
import { HttpAuthModule } from './http/auth/http.auth.module';
import { HttpUserModule } from './http/user/http.user.module';

@Module({
  imports: [InfrastructureModule, HttpAuthModule, HttpUserModule],
})
export class ApiModule {}
