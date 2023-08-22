import { Test, TestingModule } from '@nestjs/testing';
import { AuthConfigService } from './auth.config.service';
import { ConfigService } from '@nestjs/config';
import { AuthEnvConfig } from './auth.env.config';

describe('AuthConfigService', () => {
  let service: AuthConfigService;
  let configService: ConfigService;

  beforeEach(async () => {
    const configServiceMock = {
      get: jest.fn((key: string) => {
        switch (key) {
          case 'AUTH_PRIVATE_KEY':
            return Buffer.from('private-key').toString('base64');
          case 'AUTH_PUBLIC_KEY':
            return Buffer.from('public-key').toString('base64');
          case 'AUTH_ALGORITHM':
            return 'RS256';
          default:
            return null;
        }
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthConfigService,
        { provide: ConfigService, useValue: configServiceMock },
      ],
    }).compile();

    service = module.get<AuthConfigService>(AuthConfigService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get', () => {
    it('should return the correct AuthEnvConfig', () => {
      const expectedConfig: AuthEnvConfig = {
        AUTH_PRIVATE_KEY: 'private-key',
        AUTH_PUBLIC_KEY: 'public-key',
        AUTH_ALGORITHM: 'RS256',
      };

      const config = service.get();

      expect(configService.get).toHaveBeenCalledWith('AUTH_PRIVATE_KEY');
      expect(configService.get).toHaveBeenCalledWith('AUTH_PUBLIC_KEY');
      expect(configService.get).toHaveBeenCalledWith('AUTH_ALGORITHM');
      expect(config).toEqual(expectedConfig);
    });
  });
});
