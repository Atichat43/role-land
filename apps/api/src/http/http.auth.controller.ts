import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { Public } from '../app.decorators';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    console.log('req', req.ip);
    console.log('req', req.body);

    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard) // we use global guard instead
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @Public()
  @Get()
  findAll() {
    return [];
  }
}
