import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';

import Entities from '../entities';
import { TypeOrmModule } from '../typeorm.module';
import { ActionDemoUserStoriesService } from './seed/action.demo.service';
import { SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule, _TypeOrmModule.forFeature(Entities)],
  providers: [SeederService, ActionDemoUserStoriesService],
})
export class TypeOrmDevModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    // await this.seederService.main('dropTable');
    await this.seederService.main('delete');
    await this.seederService.main('save');
    // await this.seederService.demoAll();

    // await this.seederService.demoEventSubscribers();
  }
}
