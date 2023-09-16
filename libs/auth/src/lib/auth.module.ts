import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import {
  AuthEnvConfig,
  authEnvConfigTokenSymbol,
  registerAuthEnvConfig,
} from './auth.env.config';
import { AuthService } from './auth.service';
import { AppController } from './strategies/app.controller';
import { ProfileController } from './strategies/auth.profile.controller';
import { AuthDiscordController } from './strategies/discord/auth.discord.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(registerAuthEnvConfig())],
      useFactory: async (configService: ConfigService) => {
        const config = configService.getOrThrow<AuthEnvConfig>(
          authEnvConfigTokenSymbol.toString(),
        );

        return {
          privateKey: config.privateKey,
          publicKey: config.publicKey,
          signOptions: { algorithm: config.algorithm },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, AuthDiscordController, ProfileController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
