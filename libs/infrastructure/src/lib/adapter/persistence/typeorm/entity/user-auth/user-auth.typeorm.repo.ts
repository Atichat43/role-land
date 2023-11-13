import { IRepoFindOpts, IUserAuthRepoPort, UserAuth } from '@role-land/core';
import { isNull, Nullable, Optional } from '@role-land/utility-types';
import { DataSource, SelectQueryBuilder } from 'typeorm';

import { UserAuthTypeOrmEntity } from './user-auth.typeorm.entity';
import { UserAuthTypeOrmMapper } from './user-auth.typeorm.mapper';

export class UserAuthTypeOrmRepo implements IUserAuthRepoPort {
  private readonly dataSource: DataSource;

  private readonly authProviderAlias: string = 'authProvider';

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  private buildUserAuthQueryBuilder(): SelectQueryBuilder<UserAuthTypeOrmEntity> {
    return this.dataSource.createQueryBuilder(
      UserAuthTypeOrmEntity,
      this.authProviderAlias,
    );
  }

  private extendQueryWithByProp(
    by: {
      id?: string;
      providerUserId?: string;
      userId?: string;
      authProviderId?: string;
    },
    query: SelectQueryBuilder<UserAuthTypeOrmEntity>,
  ): void {
    if (by.id) {
      query.andWhere(`${this.authProviderAlias}.id = :id`, { id: by.id });
    }

    if (by.providerUserId) {
      query.andWhere(
        `${this.authProviderAlias}.providerUserId = :providerUserId`,
        {
          providerUserId: by.providerUserId,
        },
      );
    }

    if (by.userId) {
      query.andWhere(`${this.authProviderAlias}.userId = :userId`, {
        userId: by.userId,
      });
    }

    if (by.authProviderId) {
      query.andWhere(
        `${this.authProviderAlias}.authProviderId = :authProviderId`,
        {
          authProviderId: by.authProviderId,
        },
      );
    }
  }

  public async findUserAuth(by: {
    id?: string;
    providerUserId?: string;
    userId?: string;
    authProviderId?: string;
  }): Promise<Optional<UserAuth>> {
    let domainEntity: Optional<UserAuth> = undefined;

    const query: SelectQueryBuilder<UserAuthTypeOrmEntity> =
      this.buildUserAuthQueryBuilder();

    this.extendQueryWithByProp(by, query);

    const ormEntity: Nullable<UserAuthTypeOrmEntity> = await query.getOne();

    if (!isNull(ormEntity)) {
      domainEntity = UserAuthTypeOrmMapper.toDomainEntity(ormEntity);
    }

    return domainEntity;
  }

  public async countUserAuths(
    by: {
      providerUserId?: string;
      userId?: string;
      authProviderId?: string;
    },
    options: IRepoFindOpts = {},
  ): Promise<number> {
    const query: SelectQueryBuilder<UserAuthTypeOrmEntity> =
      this.buildUserAuthQueryBuilder();

    this.extendQueryWithByProp(by, query);

    return query.getCount();
  }

  public async addUserAuth(
    authProvider: UserAuth,
  ): Promise<Pick<UserAuth, 'id'>> {
    const ormEntity: UserAuthTypeOrmEntity =
      UserAuthTypeOrmMapper.toOrmEntity(authProvider);

    await this.dataSource.manager.save(ormEntity);

    return { id: ormEntity.id };
  }
}
