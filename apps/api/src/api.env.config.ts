import { LogLevel } from '@nestjs/common';
import { getLogLevels } from '@role-land/helper';
import { get } from 'env-var';

export class ApiEnvConfig {
  public static readonly HOST: string = get('HOST').required().asString();

  public static readonly PORT: number = get('PORT').required().asPortNumber();

  // log
  public static readonly LOG_ENABLE: boolean = get('LOG_ENABLE')
    .default('true')
    .asBool();

  public static readonly LOG_LEVEL: string = get('LOG_LEVEL')
    .default('log')
    .asString();

  public static readonly LOG_LEVELS: LogLevel[] = getLogLevels(this.LOG_LEVEL);
}
