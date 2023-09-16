import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { Public } from './app.decorators';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('req', req.body);
    // console.log('auth/login req', req.user);
    // return req.user;
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard) // we use global guard instead
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get()
  findAll() {
    return [];
  }
}
