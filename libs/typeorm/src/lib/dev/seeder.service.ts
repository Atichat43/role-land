import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { SEED as SEED_DOMAIN } from '@role-land/domain';
import {
  DataSource,
  DeepPartial,
  EntityTarget,
  QueryRunner,
  SaveOptions,
} from 'typeorm';

import * as Entities from '../entities';

@Injectable()
export class SeederService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async main(method: 'save' | 'delete' | 'dropTable') {
    const seed = [
      {
        tableName: Entities.ActionEntityTableName,
        entity: Entities.ActionEntity,
        data: SEED_DOMAIN.actionMock.getAllActions(),
      },
      {
        tableName: Entities.ThemeEntityTableName,
        entity: Entities.ThemeEntity,
        data: SEED_DOMAIN.themeMock.getAllThemes(),
      },
      {
        tableName: Entities.RoleEntityTableName,
        entity: Entities.RoleEntity,
        data: SEED_DOMAIN.roleMock.getAllRoles(),
      },
      {
        tableName: Entities.SharedLinkEntityTableName,
        entity: Entities.SharedLinkEntity,
        data: SEED_DOMAIN.sharedLinkMock.getAllSharedLinks(),
      },
      {
        tableName: Entities.UserEntityTableName,
        entity: Entities.UserEntity,
        data: SEED_DOMAIN.userMock.getAllUsers(),
      },
      {
        tableName: Entities.TeamEntityTableName,
        entity: Entities.TeamEntity,
        data: SEED_DOMAIN.teamMock.getAllTeams(),
      },
      {
        tableName: Entities.TeamMemberEntityTableName,
        entity: Entities.TeamMemberEntity,
        data: SEED_DOMAIN.teamMemberMock.getAllTeamMembers(),
      },
      {
        tableName: Entities.AchievementEntityTableName,
        entity: Entities.AchievementEntity,
        data: SEED_DOMAIN.achievementMock.getAllAchievements(),
      },
      {
        tableName: Entities.UserAchievementEntityTableName,
        entity: Entities.UserAchievementEntity,
        data: SEED_DOMAIN.userAchievementMock.getAllUserAchievements(),
      },
      {
        tableName: Entities.UserAchievementProgressEntityTableName,
        entity: Entities.UserAchievementProgressEntity,
        data: SEED_DOMAIN.userAchievementProgressMock.getAllUserAchievementProgresses(),
      },
      {
        tableName: Entities.SessionEntityTableName,
        entity: Entities.SessionEntity,
        data: SEED_DOMAIN.sessionMock.getAllSessions(),
      },
    ];

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (method === 'dropTable') {
        for (const { tableName } of seed.reverse()) {
          await queryRunner.dropTable(tableName, true, true, true);
        }
      }

      if (method === 'delete') {
        for (const { entity } of seed.reverse()) {
          if (entity === undefined) return;

          await queryRunner.manager.delete(entity, {});
        }
      }

      if (method === 'save') {
        for (const { entity, data } of seed) {
          if (entity === undefined || data === undefined) return;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await this.dynamicSave(queryRunner, entity, data as any[]);
        }
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error(error);
      Logger.error('Transaction failed:', error);
    } finally {
      await queryRunner.release();
      if (method === 'dropTable') Logger.log('✅ Dropping Table complete!');
      if (method === 'save') Logger.log('✅ Saving complete!');
      if (method === 'delete') Logger.log('✅ Deleting complete!');
    }
  }

  private async dynamicSave<Entity, T extends DeepPartial<Entity>>(
    queryRunner: QueryRunner,
    entityTarget: EntityTarget<Entity>,
    entities: T[],
    options?: SaveOptions,
  ): Promise<(T & Entity)[]> {
    return await queryRunner.manager.save(entityTarget, entities, options);
  }
}
