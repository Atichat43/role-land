import { Module, DynamicModule } from '@nestjs/common';
import {
  ConfigModuleOptions,
  ConfigModule as _ConfigModule,
} from '@nestjs/config';
import { ConfigService } from './config.service';
import { EnvironmentEnvConfig } from './config.env.config';

type ConfigModuleOptionsWithoutEnvIsGlobalValidate = Omit<
  ConfigModuleOptions,
  'envFilePath' | 'isGlobal' | 'validate'
>;

export class ConfigModule {
  static forRoot(
    configClasses: (new () => object)[],
    configModuleOptions?: ConfigModuleOptionsWithoutEnvIsGlobalValidate,
  ): DynamicModule {
    return {
      module: ConfigModule,
      imports: [
        _ConfigModule.forRoot({
          ...configModuleOptions,
          envFilePath: ['.env.local', '.env.dev', '.env'],
          isGlobal: true,
          validate: (config: Record<string, unknown>) => {
            const configService = new ConfigService();
            const _configClasses = [EnvironmentEnvConfig, ...configClasses];

            return configService.validate(_configClasses, config);
          },
        }),
      ],
    };
  }
}
