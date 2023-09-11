import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthConfigModule, AuthConfigService } from './config';

@Module({
  imports: [
    AuthConfigModule,
    JwtModule.registerAsync({
      imports: [AuthConfigModule],
      useFactory: async (authConfigService: AuthConfigService) => {
        const authEnvConfig = authConfigService.get();

        return {
          privateKey: authEnvConfig.AUTH_PRIVATE_KEY,
          publicKey: authEnvConfig.AUTH_PUBLIC_KEY,
          signOptions: { algorithm: authEnvConfig.AUTH_ALGORITHM },
        };
      },
      inject: [AuthConfigService],
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
