import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy as PassportDiscordStrategy } from 'passport-discord';

import { HttpAuthService } from '../../http.auth.service';
import { IDone } from '../../type';

@Injectable()
export class HttpAuthDiscordStrategy extends PassportStrategy(
  PassportDiscordStrategy,
) {
  constructor(private authService: HttpAuthService) {
    super({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ['identify', 'guilds'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: IDone,
  ) {
    // TODO: save tokens
    // const encryptedAccessToken = encrypt(accessToken).toString();
    // const encryptedRefreshToken = encrypt(refreshToken).toString();
    const user = await this.authService.validateDiscordUser(profile, {
      accessToken,
      refreshToken,
    });

    done(null, user);
  }
}
