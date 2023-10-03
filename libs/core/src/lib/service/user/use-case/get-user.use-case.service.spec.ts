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
import { GetUserUseCaseService } from './get-user.use-case.service';

describe('GetUserUseCaseService', () => {
  let getUserUseCaseService: GetUserUseCaseService;
  let userRepo: MockProxy<IUserRepoPort>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserDiToken.UserRepo,
          useFactory: () => mock<IUserRepoPort>(),
        },
        {
          provide: UserDiToken.GetUserUseCase,
          useFactory: (userRepo) => new GetUserUseCaseService(userRepo),
          inject: [UserDiToken.UserRepo],
        },
      ],
    }).compile();

    getUserUseCaseService = module.get<GetUserUseCaseService>(
      UserDiToken.GetUserUseCase,
    );
    userRepo = module.get<MockProxy<IUserRepoPort>>(UserDiToken.UserRepo);
  });

  describe('execute', () => {
    it('should return user', async () => {
      const mockUser: User = await User.new({
        username: 'username',
        password: v4(),
      });
      userRepo.findUser.mockResolvedValue(mockUser);

      const expectedUser: UserUseCaseDto = UserUseCaseDto.newFromUser(mockUser);

      const result = await getUserUseCaseService.execute({
        userId: mockUser.id,
      });

      expect(result).toEqual(expectedUser);
    });

    it('should throw error if user not found', async () => {
      userRepo.findUser.mockResolvedValue(undefined);

      expect.hasAssertions();

      try {
        await getUserUseCaseService.execute({ userId: v4() });
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_NOT_FOUND_ERROR.code);
      }
    });
  });
});
