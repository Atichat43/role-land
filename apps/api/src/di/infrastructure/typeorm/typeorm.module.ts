import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule as NestJsTypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmEnvConfig } from '@role-land/infrastructure';
import { EntitySchema } from 'typeorm';

import {
  registerTypeOrmEnvConfig,
  typeOrmEnvConfigTokenSymbol,
} from './typeorm.env.config';

const entities: EntitySchema[] = [];

@Module({
  imports: [
    NestJsTypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(registerTypeOrmEnvConfig())],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get<TypeOrmEnvConfig>(
          typeOrmEnvConfigTokenSymbol.toString(),
        );

        return {
          ...config,
          entities: entities,
          migrationsRun: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmModule {}
