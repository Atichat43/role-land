import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { instanceToPlain } from 'class-transformer';
import { v4 } from 'uuid';

import { registerConfig } from './helper.register-config';
import { MockConfigObj } from './helper.register-config.mock';

describe('registerConfig', () => {
  let app: INestApplication;
  let envBackup: NodeJS.ProcessEnv;

  beforeAll(() => {
    envBackup = process.env;
  });

  it('should be defined', () => {
    const result = registerConfig(v4(), MockConfigObj, {});
    expect(result).toBeDefined();
  });

  describe('success', () => {
    const commonPlain = {
      type: undefined,
      host: 'localhost-testing',
      port: '5432',
    };

    beforeAll(async () => {
      const moduleRef = await Test.createTestingModule({
        imports: [
          ConfigModule.forFeature(
            registerConfig('token-1', MockConfigObj, {
              ...commonPlain,
              type: 'postgres',
            }),
          ),
          ConfigModule.forFeature(
            registerConfig('token-2', MockConfigObj, {
              ...commonPlain,
              type: 'mysql',
            }),
          ),
        ],
      }).compile();

      app = moduleRef.createNestApplication();
      await app.init();
    });

    it('should able to get config', () => {
      const configService = app.get(ConfigService);

      const result1 = configService.getOrThrow<MockConfigObj>('token-1');
      const result2 = configService.getOrThrow<MockConfigObj>('token-2');

      expect(result1).toBeDefined();
      expect(result1 instanceof MockConfigObj).toBe(true);
      expect(instanceToPlain(result1)).toStrictEqual({
        ...commonPlain,
        type: 'postgres',
        port: 5432,
      });
      expect(envBackup).not.toContain(result1);

      expect(result2).toBeDefined();
      expect(result2 instanceof MockConfigObj).toBe(true);
      expect(instanceToPlain(result2)).toStrictEqual({
        ...commonPlain,
        type: 'mysql',
        port: 5432,
      });
      expect(envBackup).not.toContain(result2);
    });
  });

  describe('failure', () => {
    it('should throw error when invalid config', async () => {
      await expect(
        Test.createTestingModule({
          imports: [
            ConfigModule.forFeature(
              registerConfig(v4(), MockConfigObj, {
                type: 'invalid',
                host: 'localhost-testing',
                port: '5432',
              }),
            ),
          ],
        }).compile(),
      ).rejects.toThrowError();
    });
  });
});
