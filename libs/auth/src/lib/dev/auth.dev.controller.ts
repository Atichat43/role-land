import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthDevController {
  constructor(private readonly authService: AuthService) {}

  @Post('generate-token')
  generateToken(@Body() payload: object): string {
    return this.authService.generateToken(payload);
  }

  @Post('validate-token')
  validateToken(@Body('token') token: string) {
    return this.authService.validateToken(token);
  }
}
