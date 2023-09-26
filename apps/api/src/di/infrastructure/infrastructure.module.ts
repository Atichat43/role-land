import { Module } from '@nestjs/common';

import { TypeOrmModule } from './typeorm';

@Module({
  imports: [TypeOrmModule],
})
export class InfrastructureModule {}
