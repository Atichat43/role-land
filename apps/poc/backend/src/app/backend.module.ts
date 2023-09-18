import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmDevModule } from '@role-land/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { BackendService } from './backend.service';
import { ThrottlerBehindProxyGuard } from './throttler-behind-proxy.guard';

@Module({
  imports: [
    ConfigModule,
    // restricts the number of requests to 50 per unique IP address within the specified time frame (60 seconds in this case).
    ThrottlerModule.forRoot([
      {
        ttl: 60, // request limit is applied within a 60-second window
        limit: 50, // a maximum of 50 requests can be made within the 60-second window
      },
    ]),
    TypeOrmDevModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    BackendService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
  ],
})
export class BackendModule {}
