import {
  AuthProvider,
  IAuthProviderRepoPort,
  IRepoFindOpts,
} from '@role-land/core';
import { isNull, Nullable, Optional } from '@role-land/utility-types';
import { DataSource, SelectQueryBuilder } from 'typeorm';

import { AuthProviderTypeOrmEntity } from './auth-provider.typeorm.entity';
import { AuthProviderTypeOrmMapper } from './auth-provider.typeorm.mapper';

export class AuthProviderTypeOrmRepo implements IAuthProviderRepoPort {
  private readonly dataSource: DataSource;

  private readonly authProviderAlias: string = 'authProvider';

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  private buildAuthProviderQueryBuilder(): SelectQueryBuilder<AuthProviderTypeOrmEntity> {
    return this.dataSource.createQueryBuilder(
      AuthProviderTypeOrmEntity,
      this.authProviderAlias,
    );
  }

  private extendQueryWithByProp(
    by: { id?: string; name?: string },
    query: SelectQueryBuilder<AuthProviderTypeOrmEntity>,
  ): void {
    if (by.id) {
      query.andWhere(`${this.authProviderAlias}.id = :id`, { id: by.id });
    }

    if (by.name) {
      query.andWhere(`${this.authProviderAlias}.name = :name`, {
        name: by.name,
      });
    }
  }

  public async findAuthProvider(by: {
    id?: string;
    name?: string;
  }): Promise<Optional<AuthProvider>> {
    let domainEntity: Optional<AuthProvider> = undefined;

    const query: SelectQueryBuilder<AuthProviderTypeOrmEntity> =
      this.buildAuthProviderQueryBuilder();

    this.extendQueryWithByProp(by, query);

    const ormEntity: Nullable<AuthProviderTypeOrmEntity> = await query.getOne();

    if (!isNull(ormEntity)) {
      domainEntity = AuthProviderTypeOrmMapper.toDomainEntity(ormEntity);
    }

    return domainEntity;
  }

  public async countAuthProviders(
    by: { name?: string },
    options: IRepoFindOpts = {},
  ): Promise<number> {
    const query: SelectQueryBuilder<AuthProviderTypeOrmEntity> =
      this.buildAuthProviderQueryBuilder();

    this.extendQueryWithByProp(by, query);

    return query.getCount();
  }

  public async addAuthProvider(
    authProvider: AuthProvider,
  ): Promise<Pick<AuthProvider, 'id'>> {
    const ormEntity: AuthProviderTypeOrmEntity =
      AuthProviderTypeOrmMapper.toOrmEntity(authProvider);

    await this.dataSource.manager.save(ormEntity);

    return { id: ormEntity.id };
  }
}
