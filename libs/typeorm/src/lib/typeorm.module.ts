import { Module } from '@nestjs/common';
import { TypeOrmModule as NestJSTypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigModule, TypeOrmConfigService } from './config';
import Entities from './entities';
import EventSubscribers from './event-subscriber';

@Module({
  imports: [
    NestJSTypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useFactory: async (typeOrmConfigService: TypeOrmConfigService) => {
        const config = typeOrmConfigService.get();

        return {
          ...config,
          entities: Entities,
          subscribers: EventSubscribers,
        };
      },
      inject: [TypeOrmConfigService],
    }),
    NestJSTypeOrmModule.forFeature(Entities),
  ],
})
export class TypeOrmModule {}
