import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import {
  ETypeOrmDatabaseType,
  ITypeOrmEnvConfig,
} from './typeorm.env.config.types';

@Injectable()
export class TypeOrmConfigService {
  constructor(private configService: ConfigService) {}

  get(): TypeOrmModuleOptions {
    return {
      type: this.configService.getOrThrow<ETypeOrmDatabaseType>('TYPEORM_TYPE'),
      host: this.configService.getOrThrow<ITypeOrmEnvConfig['TYPEORM_HOST']>(
        'TYPEORM_HOST',
      ),
      port: this.configService.getOrThrow<ITypeOrmEnvConfig['TYPEORM_PORT']>(
        'TYPEORM_PORT',
      ),
      username:
        this.configService.getOrThrow<ITypeOrmEnvConfig['TYPEORM_USERNAME']>(
          'TYPEORM_USERNAME',
        ),
      password:
        this.configService.getOrThrow<ITypeOrmEnvConfig['TYPEORM_PASSWORD']>(
          'TYPEORM_PASSWORD',
        ),
      database:
        this.configService.getOrThrow<ITypeOrmEnvConfig['TYPEORM_DATABASE']>(
          'TYPEORM_DATABASE',
        ),
      synchronize: this.configService.getOrThrow<
        ITypeOrmEnvConfig['TYPEORM_SYNCHRONIZE']
      >('TYPEORM_SYNCHRONIZE'),

      retryAttempts: this.configService.getOrThrow<
        ITypeOrmEnvConfig['TYPEORM_RETRY_ATTEMPTS']
      >('TYPEORM_RETRY_ATTEMPTS'),
    };
  }
}
