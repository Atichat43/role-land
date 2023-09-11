import { Module } from '@nestjs/common';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigModule, TypeOrmConfigService } from './config';
import Entities from './entities';
import EventSubscribers from './event-subscriber';

@Module({
  imports: [
    _TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useFactory: async (configService: TypeOrmConfigService) => {
        const typeOrmModuleOptions = configService.get();

        return {
          ...typeOrmModuleOptions,
          entities: Entities,
          subscribers: EventSubscribers,
        };
      },
      inject: [TypeOrmConfigService],
    }),
    _TypeOrmModule.forFeature(Entities),
  ],
})
export class TypeOrmModule {}
