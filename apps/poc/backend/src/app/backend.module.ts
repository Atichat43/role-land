import { Module } from '@nestjs/common';
import { ConfigModule } from '@role-land/config';
import { TypeormModule } from '@role-land/typeorm';
import { TypeOrmEnvConfig } from 'libs/typeorm/src/lib/config';

@Module({
  imports: [ConfigModule.forRoot([TypeOrmEnvConfig]), TypeormModule],
})
export class BackendModule {
  constructor() {}
}
