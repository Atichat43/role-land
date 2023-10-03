import { Test, TestingModule } from '@nestjs/testing';
import { IClassValidationDetails } from '@role-land/helper';
import { mock, MockProxy } from 'jest-mock-extended';
import { v4 } from 'uuid';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  IUserRepoPort,
  User,
  UserDiToken,
  UserUseCaseDto,
} from '../../../domain/user';
import { CreateUserUseCaseService } from './create-user.use-case.service';

describe('CreateUserUseCaseService', () => {
  let createUserUseCaseService: CreateUserUseCaseService;
  let userRepo: MockProxy<IUserRepoPort>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserDiToken.UserRepo,
          useFactory: () => mock<IUserRepoPort>(),
        },
        {
          provide: UserDiToken.CreateUserUseCase,
          useFactory: (userRepo) => new CreateUserUseCaseService(userRepo),
          inject: [UserDiToken.UserRepo],
        },
      ],
    }).compile();

    createUserUseCaseService = module.get<CreateUserUseCaseService>(
      UserDiToken.CreateUserUseCase,
    );
    userRepo = module.get<MockProxy<IUserRepoPort>>(UserDiToken.UserRepo);
  });

  describe('execute', () => {
    it('should create user', async () => {
      const mockUser: User = await User.new({
        username: 'username',
        password: v4(),
      });

      userRepo.countUsers.mockResolvedValue(0);
      userRepo.addUser.mockResolvedValue({ id: mockUser.id });

      const expectedUser: UserUseCaseDto = UserUseCaseDto.newFromUser(mockUser);

      const user: UserUseCaseDto = await createUserUseCaseService.execute(
        mockUser,
      );

      expect(user).toBeDefined();
      expect(user.username).toBe(expectedUser.username);
      expect(userRepo.addUser).toBeCalledTimes(1);
    });

    it('should throw error when user already exists', async () => {
      const mockUser: User = await User.new({
        username: 'username',
        password: v4(),
      });

      userRepo.countUsers.mockResolvedValue(1);

      expect.hasAssertions();

      try {
        await createUserUseCaseService.execute(mockUser);
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_ALREADY_EXISTS_ERROR.code);
      }
    });
  });
});
