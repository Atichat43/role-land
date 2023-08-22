import { Module, OnModuleInit } from '@nestjs/common';

import { TypeOrmModule } from '../typeorm.module';
import { SeederService } from './seeder.service';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user/user.entity';

@Module({
  imports: [TypeOrmModule, _TypeOrmModule.forFeature([UserEntity])],
  providers: [SeederService],
})
export class TypeOrmDevModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    console.log('Seeding database...');

    await this.seederService.seed();

    console.log('Seeding database complete!');
  }
}
