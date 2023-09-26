import { IsBoolean, IsEnum, IsInt, IsString, Min } from 'class-validator';

export enum ETypeOrmDatabaseType {
  Postgres = 'postgres',
  // Add other database types as needed
}

export class BaseTypeOrmEnvConfig {
  @IsInt()
  @Min(1)
  retryAttempts: number;
}

export class TypeOrmEnvConfig extends BaseTypeOrmEnvConfig {
  @IsEnum(ETypeOrmDatabaseType)
  type: ETypeOrmDatabaseType;

  @IsString()
  host: string;

  @IsInt()
  port: number;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  database: string;

  @IsBoolean()
  synchronize: boolean;
}
