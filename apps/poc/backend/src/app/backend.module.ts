import { Module } from '@nestjs/common';
import { ConfigModule } from '@role-land/config';
import {
  TypeOrmEnvConfig,
  TypeormDevModule,
  TypeormModule,
} from '@role-land/typeorm';

@Module({
  imports: [ConfigModule.forRoot([TypeOrmEnvConfig]), TypeormDevModule],
})
export class BackendModule {
  constructor() {}
}
