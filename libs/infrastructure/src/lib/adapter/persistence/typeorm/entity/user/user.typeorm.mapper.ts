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

  public static toOrmEntity(domainEntity: User): UserTypeOrmEntity {
    const ormUser: UserTypeOrmEntity = new UserTypeOrmEntity();

    ormUser.id = domainEntity.id;
    ormUser.username = domainEntity.username;
    ormUser.password = domainEntity.password;
    ormUser.role = domainEntity.role;

    return ormUser;
  }
}
