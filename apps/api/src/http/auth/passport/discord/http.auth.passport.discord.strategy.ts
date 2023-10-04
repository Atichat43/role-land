import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy as PassportDiscordStrategy } from 'passport-discord';

export class HttpAuthDiscordStrategy extends PassportStrategy(
  PassportDiscordStrategy,
) {
  constructor() {
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
    // done: any,
  ) {
    const { id, username, discriminator, avatar, guilds } = profile;

    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    // console.log('done', done);

    const user = {
      id,
      username,
      discriminator,
      avatar,
      guilds,
      accessToken,
      refreshToken,
    };

    // done(null, user);
  }
}
