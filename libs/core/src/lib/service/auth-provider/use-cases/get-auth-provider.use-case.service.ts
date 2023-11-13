import { Assert } from '@role-land/helper';
import { Optional } from '@role-land/utility-types';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  AuthProvider,
  AuthProviderUseCaseDto,
  IAuthProviderRepoPort,
  IGetAuthProviderPort,
  IGetAuthProviderUseCase,
} from '../../../domain/auth-provider';

export class GetAuthProviderUseCaseService implements IGetAuthProviderUseCase {
  constructor(private readonly authProviderRepo: IAuthProviderRepoPort) {}

  public async execute(
    payload: IGetAuthProviderPort,
  ): Promise<AuthProviderUseCaseDto> {
    const authProvider: AuthProvider = Assert.notEmpty(
      await this.authProviderRepo.findAuthProvider({
        id: payload.authProviderId,
      }),
      Exception.new({
        code: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: 'AuthProvider not found.',
      }),
    );

    return AuthProviderUseCaseDto.newFromAuthProvider(authProvider);
  }
}
