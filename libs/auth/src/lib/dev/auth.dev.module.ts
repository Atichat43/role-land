import { Module } from '@nestjs/common';

import { AuthModule } from '../auth.module';
import { AuthDevController } from './auth.dev.controller';

@Module({
  imports: [AuthModule],
  controllers: [AuthDevController],
})
export class AuthDevModule {}
