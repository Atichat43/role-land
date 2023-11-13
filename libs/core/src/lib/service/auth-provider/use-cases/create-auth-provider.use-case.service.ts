import { Assert } from '@role-land/helper';

import { Code } from '../../../_shared/code';
import { Exception } from '../../../_shared/exception';
import {
  AuthProvider,
  AuthProviderUseCaseDto,
  IAuthProviderRepoPort,
  ICreateAuthProviderPort,
  ICreateAuthProviderUseCase,
} from '../../../domain/auth-provider';

export class CreateAuthProviderUseCaseService
  implements ICreateAuthProviderUseCase
{
  constructor(private readonly authProviderRepo: IAuthProviderRepoPort) {}

  public async execute(
    payload: ICreateAuthProviderPort,
  ): Promise<AuthProviderUseCaseDto> {
    const doesAuthProviderExist =
      !!(await this.authProviderRepo.countAuthProviders({
        name: payload.name,
      }));

    Assert.isFalse(
      doesAuthProviderExist,
      Exception.new({
        code: Code.ENTITY_ALREADY_EXISTS_ERROR,
        overrideMessage: 'AuthProvider already exists.',
        data: { name: payload.name },
      }),
    );

    const authProvider: AuthProvider = await AuthProvider.new({
      name: payload.name,
      clientId: payload.clientId,
      callbackUrl: payload.callbackUrl,
    });

    await this.authProviderRepo.addAuthProvider(authProvider);

    return AuthProviderUseCaseDto.newFromAuthProvider(authProvider);
  }
}
