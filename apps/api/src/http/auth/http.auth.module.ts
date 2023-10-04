import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../../di';
import { HttpAuthController } from './http.auth.controller';
import { HttpAuthService } from './http.auth.service';
import { HttpAuthPassportDiscordModule } from './passport/discord';
import { HttpAuthPassportJwtModule } from './passport/jwt';
import { HttpAuthPassportLocalModule } from './passport/local';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ session: true }),
    UserModule,
    HttpAuthPassportJwtModule,
    HttpAuthPassportLocalModule,
    HttpAuthPassportDiscordModule,
  ],
  providers: [HttpAuthService],
  controllers: [HttpAuthController],
})
export class HttpAuthModule {}
