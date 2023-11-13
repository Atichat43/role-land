import { Assert } from '@role-land/helper';
import { Optional } from '@role-land/utility-types';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  IGetUserAuthPort,
  IGetUserAuthUseCase,
  IUserAuthRepoPort,
  UserAuth,
  UserAuthUseCaseDto,
} from '../../../domain/user-auth';

export class GetUserAuthUseCaseService implements IGetUserAuthUseCase {
  constructor(private readonly userAuth: IUserAuthRepoPort) {}

  public async execute(payload: IGetUserAuthPort): Promise<UserAuthUseCaseDto> {
    const authProvider: UserAuth = Assert.notEmpty(
      await this.userAuth.findUserAuth({
        id: payload.authProviderId,
        providerUserId: payload.providerUserId,
        userId: payload.userId,
        authProviderId: payload.authProviderId,
      }),
      Exception.new({
        code: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: 'UserAuth not found.',
      }),
    );

    return UserAuthUseCaseDto.newFromUserAuth(authProvider);
  }
}
