import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../../di/user.module';
import { HttpAuthController } from './http.auth.controller';
import { HttpAuthService } from './http.auth.service';
import { HttpAuthJwtStrategy } from './passport/jwt';
import { HttpAuthLocalStrategy } from './passport/local';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1m' },
    }),
  ],
  providers: [HttpAuthService, HttpAuthLocalStrategy, HttpAuthJwtStrategy],
  controllers: [HttpAuthController],
})
export class HttpAuthModule {}
