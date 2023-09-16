import { registerConfig } from '@role-land/helper';
import { IsString } from 'class-validator';
import { Algorithm } from 'jsonwebtoken';

export class AuthEnvConfig {
  @IsString()
  privateKey: string;

  @IsString()
  publicKey: string;

  @IsString()
  algorithm: Algorithm;
}

export const authEnvConfigTokenSymbol = Symbol('AuthEnvConfigToken');

export const registerAuthEnvConfig = (token = authEnvConfigTokenSymbol) => {
  return registerConfig(token.toString(), AuthEnvConfig, {
    privateKey: process.env['AUTH_PRIVATE_KEY'],
    publicKey: process.env['AUTH_PUBLIC_KEY'],
    algorithm: process.env['AUTH_ALGORITHM'],
  });
};
