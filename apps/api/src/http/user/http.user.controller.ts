import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('users')
export class HttpUserController {
  // use case
  // constructor()

  @Get('me')
  @HttpCode(HttpStatus.OK)
  public async getMe() {
    return {
      id: 1,
      name: 'John Doe',
      email: '',
    };
  }
}
