import { Test, TestingModule } from '@nestjs/testing';
import { IClassValidationDetails } from '@role-land/helper';
import { mock, MockProxy } from 'jest-mock-extended';
import { v4 } from 'uuid';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  AuthProvider,
  AuthProviderDiToken,
  AuthProviderUseCaseDto,
  IAuthProviderRepoPort,
} from '../../../domain/auth-provider';
import { CreateAuthProviderUseCaseService } from './create-auth-provider.use-case.service';

describe('CreateAuthProviderUseCaseService', () => {
  let createAuthProviderUseCaseService: CreateAuthProviderUseCaseService;
  let authProviderRepo: MockProxy<IAuthProviderRepoPort>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthProviderDiToken.AuthProviderRepo,
          useFactory: () => mock<IAuthProviderRepoPort>(),
        },
        {
          provide: AuthProviderDiToken.CreateAuthProviderUseCase,
          useFactory: (authProviderRepo) =>
            new CreateAuthProviderUseCaseService(authProviderRepo),
          inject: [AuthProviderDiToken.AuthProviderRepo],
        },
      ],
    }).compile();

    createAuthProviderUseCaseService =
      module.get<CreateAuthProviderUseCaseService>(
        AuthProviderDiToken.CreateAuthProviderUseCase,
      );
    authProviderRepo = module.get<MockProxy<IAuthProviderRepoPort>>(
      AuthProviderDiToken.AuthProviderRepo,
    );
  });

  describe('execute', () => {
    it('should create authProvider', async () => {
      const mockAuthProvider: AuthProvider = await AuthProvider.new({
        name: 'google',
        clientId: v4(),
        callbackUrl: 'http://example.com/auth/google/callback',
      });
      authProviderRepo.countAuthProviders.mockResolvedValue(0);
      authProviderRepo.addAuthProvider.mockResolvedValue({
        id: mockAuthProvider.id,
      });

      const expectedAuthProvider: AuthProviderUseCaseDto =
        AuthProviderUseCaseDto.newFromAuthProvider(mockAuthProvider);

      const authProvider: AuthProviderUseCaseDto =
        await createAuthProviderUseCaseService.execute(mockAuthProvider);

      expect(authProvider).toBeDefined();
      expect(authProvider.name).toBe(expectedAuthProvider.name);
      expect(authProviderRepo.addAuthProvider).toBeCalledTimes(1);
    });

    it('should throw error when authProvider already exists', async () => {
      const mockAuthProvider: AuthProvider = await AuthProvider.new({
        name: 'google',
        clientId: v4(),
        callbackUrl: 'http://exmaple.com/auth/google/callback',
      });

      authProviderRepo.countAuthProviders.mockResolvedValue(1);

      expect.hasAssertions();

      try {
        await createAuthProviderUseCaseService.execute(mockAuthProvider);
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_ALREADY_EXISTS_ERROR.code);
      }
    });
  });
});
