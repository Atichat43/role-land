import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthDiscordController {
  @Get('discord')
  @UseGuards(AuthGuard('discord'))
  async login() {
    console.log('discord login');
  }

  @Get('discord/callback')
  @UseGuards(AuthGuard('discord'))
  async callback(@Req() req: Request, @Res() res: Response) {
    res.redirect('/profile');
  }
}
