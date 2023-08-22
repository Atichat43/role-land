import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export class ConfigService {
  validateConfig<T extends object>(
    configClass: new () => T,
    config: Record<string, unknown>,
  ): T {
    const validatedConfig = plainToInstance(configClass, config, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
    return validatedConfig;
  }

  validate(
    configClasses: (new () => object)[],
    config: Record<string, unknown>,
  ) {
    return configClasses.reduce((acc, configClass) => {
      const validatedConfig = this.validateConfig(configClass, config);
      return { ...acc, [configClass.name]: validatedConfig };
    }, {});
  }
}
