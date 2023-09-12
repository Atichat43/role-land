export enum ETypeOrmDatabaseType {
  POSTGRES = 'postgres',
  // Add other database types as needed
}

export interface IBaseTypeOrmEnvConfig {
  TYPEORM_RETRY_ATTEMPTS: number;
}

export interface ITypeOrmEnvConfig extends IBaseTypeOrmEnvConfig {
  TYPEORM_TYPE: ETypeOrmDatabaseType;
  TYPEORM_HOST: string;
  TYPEORM_PORT: number;
  TYPEORM_USERNAME: string;
  TYPEORM_PASSWORD: string;
  TYPEORM_DATABASE: string;
  TYPEORM_SYNCHRONIZE: boolean;
}
