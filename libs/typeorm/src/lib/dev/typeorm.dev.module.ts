import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';

import Entities from '../entities';
import { TypeOrmModule } from '../typeorm.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule, _TypeOrmModule.forFeature(Entities)],
  providers: [SeederService],
})
export class TypeOrmDevModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.clearAll();
    await this.seederService.seedAll();
    await this.seederService.demoEventSubscribers();
  }
}
