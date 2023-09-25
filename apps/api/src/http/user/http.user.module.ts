import { Module } from '@nestjs/common';

import { UserModule } from '../../di/user.module';
import { HttpUserController } from './http.user.controller';

@Module({
  imports: [UserModule],
  controllers: [HttpUserController],
})
export class HttpUserModule {}
