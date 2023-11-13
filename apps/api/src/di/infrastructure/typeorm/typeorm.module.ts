import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule as NestJsTypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmEnvConfig, UserTypeOrmEntity } from '@role-land/infrastructure';

import {
  registerTypeOrmEnvConfig,
  typeOrmEnvConfigTokenSymbol,
} from './typeorm.env.config';

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
          entities: [UserTypeOrmEntity],
          migrationsRun: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmModule {}