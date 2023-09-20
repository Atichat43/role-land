import { registerConfig } from '@role-land/helper';
import { IsString } from 'class-validator';

export class JwtEnvConfig {
  @IsString()
  secret: string;

  @IsString()
  expiresIn: number;
}

export const jwtEnvConfigTokenSymbol = Symbol('JwtEnvConfigToken');

export const registerJwtEnvConfig = (token = jwtEnvConfigTokenSymbol) => {
  return registerConfig(token.toString(), JwtEnvConfig, {
    secret: process.env['JWT_ACCESS_TOKEN_SECRET'],
    expiresIn: `${String(process.env['JWT_ACCESS_TOKEN_TTL_IN_MINUTES'])}m`,
  });
};
