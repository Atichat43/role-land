import { IsString } from 'class-validator';
import { Algorithm } from 'jsonwebtoken';

export class AuthEnvConfig {
  @IsString()
  AUTH_PRIVATE_KEY: string;

  @IsString()
  AUTH_PUBLIC_KEY: string;

  @IsString()
  AUTH_ALGORITHM: Algorithm;
}
