import { Module, Provider } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { InfrastructureModule } from './di';
import { NestHttpExceptionFilter } from './http/_shared/exception-filter';
import { HttpAuthModule } from './http/auth/http.auth.module';
import { HttpUserModule } from './http/user/http.user.module';

const providers: Provider[] = [
  {
    provide: APP_FILTER,
    useClass: NestHttpExceptionFilter,
  },
];

@Module({
  imports: [InfrastructureModule, HttpAuthModule, HttpUserModule],
  providers,
})
export class ApiModule {}
