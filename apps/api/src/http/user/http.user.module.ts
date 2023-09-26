import { Module } from '@nestjs/common';

import { UserModule } from '../../di';
import { HttpUserController } from './http.user.controller';

@Module({
  imports: [UserModule],
  controllers: [HttpUserController],
})
export class HttpUserModule {}
