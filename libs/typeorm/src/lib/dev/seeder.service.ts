import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { SEED as SEED_DOMAIN } from '@role-land/domain';
import { DataSource } from 'typeorm';

import * as Entities from '../entities';
import * as SEED from './index.seed';

@Injectable()
export class SeederService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async main(method: 'save' | 'delete') {
    // RoleEntity: SEED_DOMAIN.roleMock.getAllRoles(),
    // ThemeEntity: SEED_DOMAIN.themeMock.getAllThemes(),
    // // EffectEntity: SEED.effects,
    // // SharedLinkEntity: SEED.sharedLinks,
    // // UserEntity: SEED.users,
    // // TeamEntity: SEED.teams,
    // // TeamMemberEntity: SEED.teamMembers,
    // // RolePreferenceEntity: SEED.rolePreferences,
    // // AchievementEntity: SEED.achievements,
    // // BadgeEntity: SEED.badges,
    // // SessionEntity: SEED.sessions,
    // // PointEntity: SEED.points,
    const seed = [
      {
        entity: Entities.AchievementEntity,
        data: SEED_DOMAIN.achievementMock.getAllAchievements(),
      },
      {
        entity: Entities.ActionEntity,
        data: SEED_DOMAIN.actionMock.getAllActions(),
      },
      {
        entity: Entities.RoleEntity,
        data: SEED_DOMAIN.roleMock.getAllRoles(),
      },
      {
        entity: Entities.ThemeEntity,
        data: SEED_DOMAIN.themeMock.getAllThemes(),
      },
    ];

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (method === 'save') {
        for (const { entity, data } of seed) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await queryRunner.manager.save(entity, data as any);
        }
      }

      if (method === 'delete') {
        for (const { entity } of seed) {
          await queryRunner.manager.delete(entity, {});
        }
      }

      await queryRunner.commitTransaction();
      if (method === 'save') Logger.verbose('✅ Seeding complete!');
      if (method === 'delete') Logger.verbose('✅ Clearing complete!');
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error(error);
      Logger.error('Transaction failed:', error);
    } finally {
      await queryRunner.release();
    }
  }

  async demoAll() {
    Logger.log('▶ Demonstrating all user stories...');
    // await this.actionDemoUserStoriesService.execute();
    Logger.log('✅ Demonstration complete!');
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
