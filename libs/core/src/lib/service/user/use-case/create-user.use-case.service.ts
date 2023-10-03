import { Assert } from '@role-land/helper';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  ICreateUserPort,
  ICreateUserUseCase,
  IUserRepoPort,
  User,
  UserUseCaseDto,
} from '../../../domain/user';

export class CreateUserUseCaseService implements ICreateUserUseCase {
  constructor(private readonly userRepo: IUserRepoPort) {}

  public async execute(payload: ICreateUserPort): Promise<UserUseCaseDto> {
    const doesUserExist = !!(await this.userRepo.countUsers({
      username: payload.username,
    }));

    Assert.isFalse(
      doesUserExist,
      Exception.new({
        code: Code.ENTITY_ALREADY_EXISTS_ERROR,
        overrideMessage: 'User already exists.',
        data: { username: payload.username },
      }),
    );

    const user: User = await User.new({
      username: payload.username,
      password: payload.password,
    });

    await this.userRepo.addUser(user);

    return UserUseCaseDto.newFromUser(user);
  }
}
