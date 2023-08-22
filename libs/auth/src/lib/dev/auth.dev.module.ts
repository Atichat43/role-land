import { Module } from '@nestjs/common';

import { AuthDevController } from './auth.dev.controller';
import { AuthModule } from '../auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AuthDevController],
})
export class AuthDevModule {}
