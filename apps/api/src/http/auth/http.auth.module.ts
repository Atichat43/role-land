import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../../di';
import { HttpAuthController } from './http.auth.controller';
import { HttpAuthService } from './http.auth.service';
import { HttpAuthPassportJwtModule } from './passport/jwt/http.auth.passport.jwt.module';
import { HttpAuthLocalStrategy } from './passport/local';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule, // TODO: recheck
    HttpAuthPassportJwtModule,
  ],
  providers: [HttpAuthService, HttpAuthLocalStrategy],
  controllers: [HttpAuthController],
})
export class HttpAuthModule {}
