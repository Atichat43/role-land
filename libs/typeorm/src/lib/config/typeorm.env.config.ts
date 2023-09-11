import { IsBoolean, IsEnum, IsInt, IsString } from 'class-validator';

export enum EnumDatabaseType {
  POSTGRES = 'postgres',
  // Add other database types as needed
}

export class TypeOrmEnvConfig {
  @IsEnum(EnumDatabaseType)
  TYPEORM_TYPE: EnumDatabaseType;

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
