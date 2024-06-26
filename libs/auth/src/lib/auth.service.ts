import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthConfigService } from './config/auth.config.service';
import { AuthEnvConfig } from './config/auth.env.config';

@Injectable()
export class AuthService {
  private readonly authEnvConfig: AuthEnvConfig;

  constructor(
    private authConfigService: AuthConfigService,
    private jwtService: JwtService,
  ) {
    this.authEnvConfig = this.authConfigService.get();
  }

  generateToken(payload: object): string {
    return this.jwtService.sign(payload);
  }

  validateToken(token: string) {
    return this.jwtService.verify(token);
  }
}
