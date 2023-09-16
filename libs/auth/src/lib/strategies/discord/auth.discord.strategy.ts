import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-discord';

import {
  DiscordEnvConfig,
  discordEnvConfigTokenSymbol,
} from './auth.discord.env.config';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private readonly configService: ConfigService) {
    const discordEnvConfig = configService.getOrThrow<DiscordEnvConfig>(
      discordEnvConfigTokenSymbol.toString(),
    );

    super({
      clientID: discordEnvConfig.clientId,
      clientSecret: discordEnvConfig.clientSecret,
      callbackURL: discordEnvConfig.redirectUri,
      scope: ['identify', 'email'],
    });
  }
}
