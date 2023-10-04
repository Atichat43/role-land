import { Module, Provider } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { ApiEnvConfig } from './api.env.config';
import { InfrastructureModule } from './di';
import { NestHttpExceptionFilter } from './http/_shared/exception-filter';
import { HttpLoggingInterceptor } from './http/_shared/interceptor';
import { HttpAuthModule } from './http/auth/http.auth.module';
import { HttpUserModule } from './http/user/http.user.module';

const providers: Provider[] = [
  {
    provide: APP_FILTER,
    useClass: NestHttpExceptionFilter,
  },
];

if (ApiEnvConfig.LOG_ENABLE) {
  providers.push({
    provide: APP_INTERCEPTOR,
    useClass: HttpLoggingInterceptor,
  });
}

@Module({
  imports: [InfrastructureModule, HttpAuthModule, HttpUserModule],
  providers,
})
export class ApiModule {}
