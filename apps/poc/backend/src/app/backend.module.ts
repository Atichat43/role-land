import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthDevModule } from '@role-land/auth';
import { TypeOrmDevModule } from '@role-land/typeorm';

import { BackendService } from './backend.service';

@Module({
  imports: [TypeOrmDevModule, AuthDevModule, ConfigModule],
  providers: [BackendService],
})
export class BackendModule {}
