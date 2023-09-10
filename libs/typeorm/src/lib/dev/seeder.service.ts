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
      // {
      //   tableName: Entities.EffectEntityTableName,
      // },
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
      // // {
      //   tableName: Entities.RolePreferenceEntityTableName,
      // },
      {
        tableName: Entities.SessionEntityTableName,
        entity: Entities.SessionEntity,
        data: SEED_DOMAIN.sessionMock.getAllSessions(),
      },
      // {
      //   tableName: Entities.PointEntityTableName,
      // },
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
      if (method === 'dropTable') Logger.verbose('✅ Dropping Table complete!');
      if (method === 'save') Logger.verbose('✅ Saving complete!');
      if (method === 'delete') Logger.verbose('✅ Deleting complete!');
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

  // async demoEventSubscribers() {
  //   Logger.log('▶ Demonstrating event subscribers...');
  //   // Earn Achievement (Triggers AchievementEarned Event)
  //   const newAchievement: OmitBaseEntityColumns<Entities.AchievementEntity> = {
  //     id: uuid(),
  //     achievementType: 'Master Player',
  //     user: SEED.users[1] as Entities.UserEntity,
  //   };
  //   Logger.verbose('Creating achievement...');
  //   await this.achievementRepository.save(newAchievement);

  //   // Earn Badge (Triggers BadgeEarned Event)
  //   const newBadge: OmitBaseEntityColumns<Entities.BadgeEntity> = {
  //     id: uuid(),
  //     badgeType: 'Platinum',
  //     user: SEED.users[1] as Entities.UserEntity,
  //   };
  //   Logger.verbose('Creating badge...');
  //   await this.badgeRepository.save(newBadge);

  //   // Update Theme (Triggers ThemeUpdated Event)
  //   const updatedTheme: Partial<Entities.ThemeEntity> = {
  //     name: 'Epic Adventure',
  //     premium: true,
  //   };
  //   Logger.verbose('Updating theme...');
  //   await this.themeRepository.update(SEED.themes[0].id, updatedTheme);

  //   // Earn Points (Triggers PointsEarned Event)
  //   const pointsEarned: Omit<
  //     OmitBaseEntityColumns<Entities.PointEntity>,
  //     'calculatePointsBalance'
  //   > = {
  //     ...SEED.points[0],
  //     pointsEarned: SEED.points[0].pointsEarned + 20,
  //     pointsBalance: SEED.points[0].pointsBalance + 20,
  //   };
  //   Logger.verbose('Updating points... (earned)');
  //   await this.pointRepository.update(SEED.points[0].id, pointsEarned);

  //   // Spend Points (Triggers PointsSpent Event)
  //   const pointsSpent: Omit<
  //     OmitBaseEntityColumns<Entities.PointEntity>,
  //     'calculatePointsBalance'
  //   > = {
  //     ...SEED.points[0],
  //     pointsSpent: SEED.points[0].pointsSpent + 10,
  //     pointsBalance: SEED.points[0].pointsBalance - 10,
  //   };
  //   Logger.verbose('Updating points... (spent)');
  //   await this.pointRepository.update(SEED.points[0].id, pointsSpent);

  //   Logger.log('✅ Demonstration complete!');
  // }
}
