import { Module, OnModuleInit } from '@nestjs/common';

import { TypeormModule } from '../typeorm.module';
import { SeederService } from './seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user/user.entity';

@Module({
  imports: [TypeormModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [SeederService],
})
export class TypeormDevModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    console.log('Seeding database...');

    await this.seederService.seed();

    console.log('Seeding database complete!');
  }
}
