import { UserAuth } from '@role-land/core';

import { UserAuthTypeOrmEntity } from './user-auth.typeorm.entity';

export class UserAuthTypeOrmMapper {
  public static toDomainEntity(ormEntity: UserAuthTypeOrmEntity): UserAuth {
    const domainUserAuth: UserAuth = new UserAuth({
      id: ormEntity.id,
      providerUserId: ormEntity.providerUserId,
      accessToken: ormEntity.accessToken,
      refreshToken: ormEntity.refreshToken,
      userId: ormEntity.userId,
      authProviderId: ormEntity.authProviderId,
    });

    return domainUserAuth;
  }

  public static toOrmEntity(domainEntity: UserAuth): UserAuthTypeOrmEntity {
    const ormUserAuth: UserAuthTypeOrmEntity = new UserAuthTypeOrmEntity();

    ormUserAuth.id = domainEntity.id;
    ormUserAuth.providerUserId = domainEntity.providerUserId;
    ormUserAuth.accessToken = domainEntity.accessToken;
    ormUserAuth.refreshToken = domainEntity.refreshToken;
    ormUserAuth.userId = domainEntity.userId;
    ormUserAuth.authProviderId = domainEntity.authProviderId;

    return ormUserAuth;
  }
}
