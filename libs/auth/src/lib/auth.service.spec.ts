import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthService } from './auth.service';
import { AuthConfigService } from './config/auth.config.service';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const jwtServiceMock = {
      sign: jest.fn((payload) => JSON.stringify(payload)),
      verify: jest.fn((token) => JSON.parse(token)),
    };

    const authConfigServiceMock = {
      get: jest.fn(() => ({
        AUTH_PRIVATE_KEY: 'private-key',
        AUTH_PUBLIC_KEY: 'public-key',
        AUTH_PASSPHRASE: 'passphrase',
      })),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: AuthConfigService, useValue: authConfigServiceMock },
        { provide: JwtService, useValue: jwtServiceMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateToken', () => {
    it('should generate a token', () => {
      const payload = { userId: 1 };
      const token = service.generateToken(payload);

      expect(jwtService.sign).toHaveBeenCalledWith(payload);
      expect(token).toEqual(JSON.stringify(payload));
    });
  });

  describe('validateToken', () => {
    it('should validate a token', () => {
      const token = JSON.stringify({ userId: 1 });
      const decodedToken = service.validateToken(token);

      expect(jwtService.verify).toHaveBeenCalledWith(token);
      expect(decodedToken).toEqual(JSON.parse(token));
    });
  });
});
