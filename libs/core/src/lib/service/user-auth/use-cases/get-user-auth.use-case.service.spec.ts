import { Test, TestingModule } from '@nestjs/testing';
import { IClassValidationDetails } from '@role-land/helper';
import { mock, MockProxy } from 'jest-mock-extended';
import { v4 } from 'uuid';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  IUserAuthRepoPort,
  UserAuth,
  UserAuthDiToken,
  UserAuthUseCaseDto,
} from '../../../domain/user-auth';
import { GetUserAuthUseCaseService } from './get-user-auth.use-case.service';

describe('GetUserAuthUseCaseService', () => {
  let getUserAuthUseCaseService: GetUserAuthUseCaseService;
  let authProviderRepo: MockProxy<IUserAuthRepoPort>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserAuthDiToken.UserAuthRepo,
          useFactory: () => mock<IUserAuthRepoPort>(),
        },
        {
          provide: UserAuthDiToken.GetUserAuthUseCase,
          useFactory: (authProviderRepo) =>
            new GetUserAuthUseCaseService(authProviderRepo),
          inject: [UserAuthDiToken.UserAuthRepo],
        },
      ],
    }).compile();

    getUserAuthUseCaseService = module.get<GetUserAuthUseCaseService>(
      UserAuthDiToken.GetUserAuthUseCase,
    );
    authProviderRepo = module.get<MockProxy<IUserAuthRepoPort>>(
      UserAuthDiToken.UserAuthRepo,
    );
  });

  describe('execute', () => {
    it('should return authProvider', async () => {
      const mockUserAuth: UserAuth = await UserAuth.new({
        providerUserId: '1234567890',
        userId: v4(),
        authProviderId: v4(),
        accessToken: null,
        refreshToken: null,
      });
      authProviderRepo.findUserAuth.mockResolvedValue(mockUserAuth);

      const expectedUserAuth: UserAuthUseCaseDto =
        UserAuthUseCaseDto.newFromUserAuth(mockUserAuth);

      const result = await getUserAuthUseCaseService.execute({
        authProviderId: mockUserAuth.authProviderId,
        userId: mockUserAuth.userId,
        providerUserId: mockUserAuth.providerUserId,
      });

      expect(result).toEqual(expectedUserAuth);
    });

    it('should throw error if authProvider not found', async () => {
      authProviderRepo.findUserAuth.mockResolvedValue(undefined);

      expect.hasAssertions();

      try {
        await getUserAuthUseCaseService.execute({
          authProviderId: v4(),
          userId: v4(),
          providerUserId: '1234567890',
        });
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_NOT_FOUND_ERROR.code);
      }
    });
  });
});
