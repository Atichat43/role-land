import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { HttpAuthService } from '../../http.auth.service';
import {
  JwtEnvConfig,
  jwtEnvConfigTokenSymbol,
  registerJwtEnvConfig,
} from './http.auth.passport.jwt.env-config';
import { HttpAuthJwtStrategy } from './http.auth.passport.jwt.strategy';

const providers: Provider[] = [
  HttpAuthService,
  {
    provide: HttpAuthJwtStrategy,
    useFactory: (authService: HttpAuthService, configService: ConfigService) =>
      new HttpAuthJwtStrategy(authService, configService),
    inject: [HttpAuthService, ConfigService],
  },
];

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true, // http.auth.service need jwt service
      imports: [ConfigModule.forFeature(registerJwtEnvConfig())],
      useFactory: async (configService: ConfigService) => {
        const config = configService.getOrThrow<JwtEnvConfig>(
          jwtEnvConfigTokenSymbol.toString(),
        );

        return {
          secret: config.secret,
          signOptions: { expiresIn: config.expiresIn },
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [],
  providers: providers,
})
export class HttpAuthPassportJwtModule {}
