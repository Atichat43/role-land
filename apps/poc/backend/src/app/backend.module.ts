import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@role-land/typeorm';

@Module({
  imports: [TypeOrmModule],
})
export class BackendModule {}
