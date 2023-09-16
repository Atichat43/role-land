import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmDevModule } from '@role-land/typeorm';

import { BackendService } from './backend.service';

@Module({
  imports: [TypeOrmDevModule, ConfigModule],
  providers: [BackendService],
})
export class BackendModule {}
