import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { EnumDatabaseType } from './typeorm.env.config';

@Injectable()
export class TypeOrmConfigService {
  constructor(private configService: ConfigService) {}

  get(): TypeOrmModuleOptions {
    const TYPEORM_TYPE = this.configService.get<string>(
      'TYPEORM_TYPE',
    ) as EnumDatabaseType;
    const TYPEORM_HOST = this.configService.get<string>(
      'TYPEORM_HOST',
    ) as string;
    const TYPEORM_PORT = this.configService.get<number>(
      'TYPEORM_PORT',
    ) as number;
    const TYPEORM_USERNAME = this.configService.get<string>(
      'TYPEORM_USERNAME',
    ) as string;
    const TYPEORM_PASSWORD = this.configService.get<string>(
      'TYPEORM_PASSWORD',
    ) as string;
    const TYPEORM_DATABASE = this.configService.get<string>(
      'TYPEORM_DATABASE',
    ) as string;
    const TYPEORM_SYNCHRONIZE = this.configService.get<boolean>(
      'TYPEORM_SYNCHRONIZE',
    ) as boolean;

    return {
      // data source options
      type: TYPEORM_TYPE,
      host: TYPEORM_HOST,
      port: TYPEORM_PORT,
      username: TYPEORM_USERNAME,
      password: TYPEORM_PASSWORD,
      database: TYPEORM_DATABASE,
      synchronize: TYPEORM_SYNCHRONIZE,

      retryAttempts: 3,
    };
  }
}
