import { Module, OnModuleInit } from '@nestjs/common';

import { TypeOrmModule } from '../typeorm.module';
import { SeederService } from './seeder.service';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '../entities';

@Module({
  imports: [TypeOrmModule, _TypeOrmModule.forFeature(entities)],
  providers: [SeederService],
})
export class TypeOrmDevModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.seedAll();
  }
}
