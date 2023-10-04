import { Module } from '@nestjs/common';

import { HttpAuthDiscordStrategy } from './http.auth.passport.discord.strategy';

@Module({
  providers: [HttpAuthDiscordStrategy],
})
export class HttpAuthPassportDiscordModule {}
