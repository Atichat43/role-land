import { Module } from '@nestjs/common';
import { IntentsBitField } from 'discord.js';
import { NecordModule } from 'necord';

import { BotUpdate } from './bot/bot.update';

@Module({
  imports: [
    NecordModule.forRoot({
      token: process.env.DISCORD_BOT_TOKEN,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
      ],
      development: [process.env.DISCORD_BOT_DEVELOPMENT_GUILD_ID], // discord cache app cmds for 1 hour, so we need to restart the bot to see changes
      skipRegistration: false,
    }),
  ],
  providers: [BotUpdate],
})
export class DiscordBotModule {}
