import { Module } from '@nestjs/common';
import { ConfigModule } from '@role-land/config';
import { TypeOrmDevModule, TypeOrmEnvConfig } from '@role-land/typeorm';

@Module({
  imports: [ConfigModule.forRoot([TypeOrmEnvConfig]), TypeOrmDevModule],
})
export class BackendModule {}
