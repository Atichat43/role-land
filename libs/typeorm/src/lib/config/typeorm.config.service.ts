import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnumDatabaseType, TypeOrmEnvConfig } from './typeorm.env.config';

@Injectable()
export class TypeOrmConfigService {
  constructor(private configService: ConfigService) {}

  get(): TypeOrmEnvConfig {
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
      TYPEORM_TYPE,
      TYPEORM_HOST,
      TYPEORM_PORT,
      TYPEORM_USERNAME,
      TYPEORM_PASSWORD,
      TYPEORM_DATABASE,
      TYPEORM_SYNCHRONIZE,
    };
  }
}
