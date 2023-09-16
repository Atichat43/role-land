import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
  @Get()
  @UseGuards(AuthGuard('discord'))
  async getProfile(@Req() req: Request) {
    return req.user;
  }
}
