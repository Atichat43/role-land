import { IsEnum } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

export class EnvironmentEnvConfig {
  @IsEnum(Environment)
  NODE_ENV: Environment;
}
