import { Module } from '@nestjs/common';

import { HttpAuthService } from '../../http.auth.service';
import { HttpAuthDiscordStrategy } from './http.auth.passport.discord.strategy';

@Module({
  providers: [HttpAuthService, HttpAuthDiscordStrategy],
})
export class HttpAuthPassportDiscordModule {}
