import { User } from '@role-land/core';

import { UserTypeOrmEntity } from './user.typeorm.entity';

export class UserTypeOrmMapper {
  public static toDomainEntity(ormEntity: UserTypeOrmEntity): User {
    const domainUser: User = new User({
      id: ormEntity.id,
      username: ormEntity.username,
      password: ormEntity.password,
      role: ormEntity.role,
    });

    return domainUser;
  }
}
