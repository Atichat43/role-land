import { ConfigFactoryKeyHost, registerAs } from '@nestjs/config';
import { Class } from '@role-land/utility-types';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

type INestJsRegisterAsFunctionReturn<T> = (() => T) & ConfigFactoryKeyHost<T>;

export const registerConfig = <T extends object, V>(
  token: string,
  configObj: Class<T>,
  plain: V,
): INestJsRegisterAsFunctionReturn<T> => {
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
