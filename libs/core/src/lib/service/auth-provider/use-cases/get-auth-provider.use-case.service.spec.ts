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
import { GetAuthProviderUseCaseService } from './get-auth-provider.use-case.service';

describe('GetAuthProviderUseCaseService', () => {
  let getAuthProviderUseCaseService: GetAuthProviderUseCaseService;
  let authProviderRepo: MockProxy<IAuthProviderRepoPort>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthProviderDiToken.AuthProviderRepo,
          useFactory: () => mock<IAuthProviderRepoPort>(),
        },
        {
          provide: AuthProviderDiToken.GetAuthProviderUseCase,
          useFactory: (authProviderRepo) =>
            new GetAuthProviderUseCaseService(authProviderRepo),
          inject: [AuthProviderDiToken.AuthProviderRepo],
        },
      ],
    }).compile();

    getAuthProviderUseCaseService = module.get<GetAuthProviderUseCaseService>(
      AuthProviderDiToken.GetAuthProviderUseCase,
    );
    authProviderRepo = module.get<MockProxy<IAuthProviderRepoPort>>(
      AuthProviderDiToken.AuthProviderRepo,
    );
  });

  describe('execute', () => {
    it('should return authProvider', async () => {
      const mockAuthProvider: AuthProvider = await AuthProvider.new({
        name: 'google',
        clientId: v4(),
        callbackUrl: 'http://example.com/auth/google/callback',
      });
      authProviderRepo.findAuthProvider.mockResolvedValue(mockAuthProvider);

      const expectedAuthProvider: AuthProviderUseCaseDto =
        AuthProviderUseCaseDto.newFromAuthProvider(mockAuthProvider);

      const result = await getAuthProviderUseCaseService.execute({
        authProviderId: mockAuthProvider.id,
      });

      expect(result).toEqual(expectedAuthProvider);
    });

    it('should throw error if authProvider not found', async () => {
      authProviderRepo.findAuthProvider.mockResolvedValue(undefined);

      expect.hasAssertions();

      try {
        await getAuthProviderUseCaseService.execute({ authProviderId: v4() });
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_NOT_FOUND_ERROR.code);
      }
    });
  });
});
