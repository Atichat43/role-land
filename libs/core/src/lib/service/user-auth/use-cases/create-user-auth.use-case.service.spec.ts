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
import { CreateUserAuthUseCaseService } from './create-user-auth.use-case.service';

describe('CreateUserAuthUseCaseService', () => {
  let createUserAuthUseCaseService: CreateUserAuthUseCaseService;
  let userAuthRepo: MockProxy<IUserAuthRepoPort>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserAuthDiToken.UserAuthRepo,
          useFactory: () => mock<IUserAuthRepoPort>(),
        },
        {
          provide: UserAuthDiToken.CreateUserAuthUseCase,
          useFactory: (userAuthRepo) =>
            new CreateUserAuthUseCaseService(userAuthRepo),
          inject: [UserAuthDiToken.UserAuthRepo],
        },
      ],
    }).compile();

    createUserAuthUseCaseService = module.get<CreateUserAuthUseCaseService>(
      UserAuthDiToken.CreateUserAuthUseCase,
    );
    userAuthRepo = module.get<MockProxy<IUserAuthRepoPort>>(
      UserAuthDiToken.UserAuthRepo,
    );
  });

  describe('execute', () => {
    it('should create userAuth', async () => {
      const mockUserAuth: UserAuth = await UserAuth.new({
        providerUserId: '1234567890',
        userId: v4(),
        authProviderId: v4(),
        accessToken: null,
        refreshToken: null,
      });
      userAuthRepo.countUserAuths.mockResolvedValue(0);
      userAuthRepo.addUserAuth.mockResolvedValue({
        id: mockUserAuth.id,
      });

      const expectedUserAuth: UserAuthUseCaseDto =
        UserAuthUseCaseDto.newFromUserAuth(mockUserAuth);

      const userAuth: UserAuthUseCaseDto =
        await createUserAuthUseCaseService.execute(mockUserAuth);

      expect(userAuth).toBeDefined();
      expect(userAuth.userId).toBe(expectedUserAuth.userId);
      expect(userAuthRepo.addUserAuth).toBeCalledTimes(1);
    });

    it('should throw error when userAuth already exists', async () => {
      const mockUserAuth: UserAuth = await UserAuth.new({
        providerUserId: '1234567890',
        userId: v4(),
        authProviderId: v4(),
        accessToken: null,
        refreshToken: null,
      });

      userAuthRepo.countUserAuths.mockResolvedValue(1);

      expect.hasAssertions();

      try {
        await createUserAuthUseCaseService.execute(mockUserAuth);
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_ALREADY_EXISTS_ERROR.code);
      }
    });
  });
});
