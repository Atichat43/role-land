import { IRepoFindOpts, IUserRepoPort, User } from '@role-land/core';
import { isNull, Nullable, Optional } from '@role-land/utility-types';
import { DataSource, SelectQueryBuilder } from 'typeorm';

import { UserTypeOrmEntity } from './user.typeorm.entity';
import { UserTypeOrmMapper } from './user.typeorm.mapper';

export class UserTypeOrmRepo implements IUserRepoPort {
  private readonly dataSource: DataSource;

  private readonly userAlias: string = 'user';

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  private buildUserQueryBuilder(): SelectQueryBuilder<UserTypeOrmEntity> {
    return this.dataSource.createQueryBuilder(
      UserTypeOrmEntity,
      this.userAlias,
    );
  }

  private extendQueryWithByProp(
    by: { id?: string; username?: string },
    query: SelectQueryBuilder<UserTypeOrmEntity>,
  ): void {
    if (by.id) {
      query.andWhere(`${this.userAlias}.id = :id`, { id: by.id });
    }

    if (by.username) {
      query.andWhere(`${this.userAlias}.username = :username`, {
        username: by.username,
      });
    }
  }

  public async findUser(
    by: { id?: string; username?: string },
    options: IRepoFindOpts = {},
  ): Promise<Optional<User>> {
    let domainEntity: Optional<User> = undefined;

    const query: SelectQueryBuilder<UserTypeOrmEntity> =
      this.buildUserQueryBuilder();

    this.extendQueryWithByProp(by, query);

    const ormEntity: Nullable<UserTypeOrmEntity> = await query.getOne();

    if (!isNull(ormEntity)) {
      domainEntity = UserTypeOrmMapper.toDomainEntity(ormEntity);
    }

    return domainEntity;
  }
}
