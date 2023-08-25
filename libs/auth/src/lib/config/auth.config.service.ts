import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Algorithm } from 'jsonwebtoken';

import { AuthEnvConfig } from './auth.env.config';

@Injectable()
export class AuthConfigService {
  constructor(private configService: ConfigService) {}

  get(): AuthEnvConfig {
    const privateKeyBase64 = this.configService.get<string>(
      'AUTH_PRIVATE_KEY',
    ) as string;
    const publicKeyBase64 = this.configService.get<string>(
      'AUTH_PUBLIC_KEY',
    ) as string;
    const algorithm = this.configService.get<string>(
      'AUTH_ALGORITHM',
    ) as Algorithm;

    return {
      AUTH_PRIVATE_KEY: Buffer.from(privateKeyBase64, 'base64').toString(
        'utf-8',
      ),
      AUTH_PUBLIC_KEY: Buffer.from(publicKeyBase64, 'base64').toString('utf-8'),
      AUTH_ALGORITHM: algorithm,
    };
  }
}
