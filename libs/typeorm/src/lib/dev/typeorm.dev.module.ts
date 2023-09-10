import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';

import Entities from '../entities';
import { TypeOrmModule } from '../typeorm.module';
import { SeederMethod, SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule, _TypeOrmModule.forFeature(Entities)],
  providers: [SeederService],
})
export class TypeOrmDevModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    // await this.seederService.main(SeederMethod.DropTable);
    await this.seederService.main(SeederMethod.Delete);
    await this.seederService.main(SeederMethod.Save);
  }
}
