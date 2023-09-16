import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmDevModule } from '@role-land/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { BackendService } from './backend.service';

@Module({
  imports: [TypeOrmDevModule, AuthModule, ConfigModule],
  controllers: [AppController],
  providers: [BackendService],
})
export class BackendModule {}
