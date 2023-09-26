import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from '../../di';
import { HttpAuthController } from './http.auth.controller';
import { HttpAuthService } from './http.auth.service';
import { HttpAuthPassportJwtModule } from './passport/jwt';
import { HttpAuthPassportLocalModule } from './passport/local';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    HttpAuthPassportJwtModule,
    HttpAuthPassportLocalModule,
  ],
  providers: [HttpAuthService],
  controllers: [HttpAuthController],
})
export class HttpAuthModule {}
