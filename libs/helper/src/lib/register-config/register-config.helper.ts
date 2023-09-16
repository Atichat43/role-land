import { registerAs } from '@nestjs/config';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export const registerConfig = <T extends object, V>(
  token: string,
  configObj: ClassConstructor<T>,
  plain: V,
) => {
  return registerAs(token, () => {
    const config = plainToInstance(configObj, plain, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(config, {
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return config;
  });
};
