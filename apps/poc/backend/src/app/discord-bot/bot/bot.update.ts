import { Injectable, Logger, UseInterceptors } from '@nestjs/common';
import { Client } from 'discord.js';
import {
  Arguments,
  Context,
  ContextOf,
  On,
  Once,
  Options,
  SlashCommand,
  SlashCommandContext,
  StringOption,
  TextCommand,
  TextCommandContext,
} from 'necord';

import { AnimeAutocompleteInterceptor } from './anime.interceptor';

export class TextDto {
  @StringOption({
    name: 'text',
    description: 'Your text',
    required: true,
  })
  text: string;
}

export class AnimeDto {
  @StringOption({
    name: 'anime',
    description: 'The anime to look up',
    autocomplete: true,
    required: true,
  })
  anime: string;
}

@Injectable()
export class BotUpdate {
  private readonly logger = new Logger(BotUpdate.name);

  public constructor(private readonly client: Client) {}

  @Once('ready')
  public onReady(@Context() [client]: ContextOf<'ready'>) {
    this.logger.log(`Bot logged in as ${client.user.username}`);
    // this.logger.log(context);
  }

  @On('warn')
  public onWarn(@Context() [message]: ContextOf<'warn'>) {
    this.logger.warn(message);
  }

  @On('error')
  public onError(@Context() [message]: ContextOf<'error'>) {
    this.logger.error(message);
  }

  @On('messageCreate')
  public onMessageCreate(@Context() [message]: ContextOf<'messageCreate'>) {
    if (message.author.bot) return;

    this.logger.log('message: ' + message.content);

    message.reply('reply' + message.content);
  }

  @TextCommand({
    name: 'ping',
    description: 'Ping command!',
  })
  public onPingCommand(
    @Context() [message]: TextCommandContext,
    @Arguments() args: string[],
  ) {
    this.logger.log('args: ' + args);
    return message.reply('pong!');
  }

  @SlashCommand({
    name: 'ping',
    description: 'Ping command!',
    guilds: [process.env.DISCORD_BOT_DEVELOPMENT_GUILD_ID],
  })
  public async onPingSlash(@Context() [interaction]: SlashCommandContext) {
    this.logger.log('interaction: ' + interaction.createdAt);
    return interaction.reply({ content: 'Pong!' });
  }

  @SlashCommand({
    name: 'length',
    description: 'Get length of text',
  })
  public async onLength(
    @Context() [interaction]: SlashCommandContext,
    @Options() { text }: TextDto,
  ) {
    return interaction.reply({
      content: `Length of your text ${text.length}`,
    });
  }

  @UseInterceptors(AnimeAutocompleteInterceptor)
  @SlashCommand({
    name: 'anime',
    description: 'Lookup information about an anime',
  })
  public async onSearch(
    @Context() [interaction]: SlashCommandContext,
    @Options() { anime }: AnimeDto,
  ) {
    return interaction.reply({ content: `I found the anime ${anime}` });
  }
}
