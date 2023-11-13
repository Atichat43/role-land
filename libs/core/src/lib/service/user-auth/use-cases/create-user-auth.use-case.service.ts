import { Assert } from '@role-land/helper';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  ICreateUserAuthPort,
  ICreateUserAuthUseCase,
  IUserAuthRepoPort,
  UserAuth,
  UserAuthUseCaseDto,
} from '../../../domain/user-auth';

export class CreateUserAuthUseCaseService implements ICreateUserAuthUseCase {
  constructor(private readonly userAuthRepo: IUserAuthRepoPort) {}

  public async execute(
    payload: ICreateUserAuthPort,
  ): Promise<UserAuthUseCaseDto> {
    const doesUserAuthExist = !!(await this.userAuthRepo.countUserAuths({
      providerUserId: payload.providerUserId,
    }));

    Assert.isFalse(
      doesUserAuthExist,
      Exception.new({
        code: Code.ENTITY_ALREADY_EXISTS_ERROR,
        overrideMessage: 'UserAuth already exists.',
        data: { name: payload.providerUserId },
      }),
    );

    const userAuth: UserAuth = await UserAuth.new({
      providerUserId: payload.providerUserId,
      userId: payload.userId,
      authProviderId: payload.authProviderId,

      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
    });

    await this.userAuthRepo.addUserAuth(userAuth);

    return UserAuthUseCaseDto.newFromUserAuth(userAuth);
  }
}
