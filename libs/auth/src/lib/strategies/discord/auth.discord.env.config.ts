import { registerConfig } from '@role-land/helper';
import { IsString } from 'class-validator';

export class DiscordEnvConfig {
  @IsString()
  clientId: string;

  @IsString()
  clientSecret: string;

  @IsString()
  redirectUri: string;
}

export const discordEnvConfigTokenSymbol = Symbol('DiscordEnvConfigToken');

export const registerDiscordEnvConfig = (
  token = discordEnvConfigTokenSymbol,
) => {
  return registerConfig(token.toString(), DiscordEnvConfig, {
    clientId: process.env['DISCORD_CLIENT_ID'],
    clientSecret: process.env['DISCORD_CLIENT_SECRET'],
    redirectUri: process.env['DISCORD_REDIRECT_URI'],
  });
};
