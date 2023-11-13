import { Exclude, Expose, plainToClass } from 'class-transformer';

import { AuthProvider } from '../../entity';

@Exclude()
export class AuthProviderUseCaseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  clientId: string;

  public static newFromAuthProvider(
    authProvider: AuthProvider,
  ): AuthProviderUseCaseDto {
    return plainToClass(AuthProviderUseCaseDto, authProvider);
  }
}
