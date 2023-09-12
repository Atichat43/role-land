import { IsBoolean, IsEnum, IsInt, IsString, Min } from 'class-validator';

import {
  ETypeOrmDatabaseType,
  IBaseTypeOrmEnvConfig,
  ITypeOrmEnvConfig,
} from './typeorm.env.config.types';

export class BaseTypeOrmEnvConfig implements IBaseTypeOrmEnvConfig {
  @IsInt()
  @Min(1)
  TYPEORM_RETRY_ATTEMPTS: number;
}

export class TypeOrmEnvConfig
  extends BaseTypeOrmEnvConfig
  implements ITypeOrmEnvConfig
{
  @IsEnum(ETypeOrmDatabaseType)
  TYPEORM_TYPE: ETypeOrmDatabaseType;

  @IsString()
  TYPEORM_HOST: string;

  @IsInt()
  TYPEORM_PORT: number;

  @IsString()
  TYPEORM_USERNAME: string;

  @IsString()
  TYPEORM_PASSWORD: string;

  @IsString()
  TYPEORM_DATABASE: string;

  @IsBoolean()
  TYPEORM_SYNCHRONIZE: boolean;
}
