import { AuthProvider } from '@role-land/core';

import { AuthProviderTypeOrmEntity } from './auth-provider.typeorm.entity';

export class AuthProviderTypeOrmMapper {
  public static toDomainEntity(
    ormEntity: AuthProviderTypeOrmEntity,
  ): AuthProvider {
    const domainAuthProvider: AuthProvider = new AuthProvider({
      id: ormEntity.id,
      name: ormEntity.name,
      clientId: ormEntity.clientId,
      callbackUrl: ormEntity.callbackUrl,
    });

    return domainAuthProvider;
  }

  public static toOrmEntity(
    domainEntity: AuthProvider,
  ): AuthProviderTypeOrmEntity {
    const ormAuthProvider: AuthProviderTypeOrmEntity =
      new AuthProviderTypeOrmEntity();

    ormAuthProvider.id = domainEntity.id;
    ormAuthProvider.name = domainEntity.name;
    ormAuthProvider.clientId = domainEntity.clientId;
    ormAuthProvider.callbackUrl = domainEntity.callbackUrl;

    return ormAuthProvider;
  }
}
