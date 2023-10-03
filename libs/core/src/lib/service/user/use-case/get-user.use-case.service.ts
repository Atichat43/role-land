import { Assert } from '@role-land/helper';
import { Optional } from '@role-land/utility-types';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  IGetUserPort,
  IGetUserUseCase,
  IUserRepoPort,
  User,
  UserUseCaseDto,
} from '../../../domain/user';

export class GetUserUseCaseService implements IGetUserUseCase {
  constructor(private readonly userRepo: IUserRepoPort) {}

  public async execute(payload: IGetUserPort): Promise<UserUseCaseDto> {
    const user: User = Assert.notEmpty(
      await this.userRepo.findUser({
        id: payload.userId,
      }),
      Exception.new({
        code: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: 'User not found.',
      }),
    );

    return UserUseCaseDto.newFromUser(user);
  }
}
