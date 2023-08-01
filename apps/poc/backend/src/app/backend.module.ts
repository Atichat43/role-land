import { Module } from '@nestjs/common';

// import { BackendController } from './backend.controller';
// import { BackendService } from './backend.service';
import { DiscordBotModule } from './discord-bot/discord-bot.module';

@Module({
  imports: [DiscordBotModule],
  // controllers: [BackendController],
  // providers: [BackendService],
})
export class BackendModule {}
