import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule as NestJsTypeOrmModule } from '@nestjs/typeorm';

import Entities from './entities';
import EventSubscribers from './event-subscriber';
import {
  registerTypeOrmConfig,
  typeOrmConfigTokenSymbol,
  TypeOrmEnvConfig,
} from './typeorm.env.config';

@Module({
  imports: [
    NestJsTypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forFeature(
          registerTypeOrmConfig(typeOrmConfigTokenSymbol),
        ),
      ],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get<TypeOrmEnvConfig>(
          typeOrmConfigTokenSymbol.toString(),
        );

        return {
          ...config,
          entities: Entities,
          subscribers: EventSubscribers,
        };
      },
      inject: [ConfigService],
    }),
    NestJsTypeOrmModule.forFeature(Entities),
  ],
})
export class TypeOrmModule {}
