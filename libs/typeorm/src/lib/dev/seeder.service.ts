/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import * as Entities from '../entities';
import * as SEED from './index.seed';
import { OmitBaseEntityColumns } from './index.seed';

@Injectable()
export class SeederService {
  repositories: {
    PointEntity: Repository<Entities.PointEntity>;
    SessionEntity: Repository<Entities.SessionEntity>;
    UserEntity: Repository<Entities.UserEntity>;
    AchievementEntity: Repository<Entities.AchievementEntity>;
    BadgeEntity: Repository<Entities.BadgeEntity>;
    EffectEntity: Repository<Entities.EffectEntity>;
    RoleEntity: Repository<Entities.RoleEntity>;
    SharedLinkEntity: Repository<Entities.SharedLinkEntity>;
    ThemeEntity: Repository<Entities.ThemeEntity>;
    RolePreferenceEntity: Repository<Entities.RolePreferenceEntity>;
    TeamEntity?: Repository<Entities.TeamEntity>;
    TeamMemberEntity?: Repository<Entities.TeamMemberEntity>;
  };

  constructor(
    @InjectRepository(Entities.PointEntity)
    private readonly pointRepository: Repository<Entities.PointEntity>,
    @InjectRepository(Entities.SessionEntity)
    private readonly sessionRepository: Repository<Entities.SessionEntity>,
    @InjectRepository(Entities.UserEntity)
    private readonly userRepository: Repository<Entities.UserEntity>,
    @InjectRepository(Entities.AchievementEntity)
    private readonly achievementRepository: Repository<Entities.AchievementEntity>,
    @InjectRepository(Entities.BadgeEntity)
    private readonly badgeRepository: Repository<Entities.BadgeEntity>,
    @InjectRepository(Entities.EffectEntity)
    private readonly effectRepository: Repository<Entities.EffectEntity>,
    @InjectRepository(Entities.RoleEntity)
    private readonly roleRepository: Repository<Entities.RoleEntity>,
    @InjectRepository(Entities.SharedLinkEntity)
    private readonly sharedLinkRepository: Repository<Entities.SharedLinkEntity>,
    @InjectRepository(Entities.ThemeEntity)
    private readonly themeRepository: Repository<Entities.ThemeEntity>,
    @InjectRepository(Entities.RolePreferenceEntity)
    private readonly rolePreferenceRepository: Repository<Entities.RolePreferenceEntity>,
    @InjectRepository(Entities.TeamEntity)
    private readonly teamRepository: Repository<Entities.TeamEntity>,
    @InjectRepository(Entities.TeamMemberEntity)
    private readonly teamMemberRepository: Repository<Entities.TeamMemberEntity>,
  ) {
    this.repositories = {
      PointEntity: this.pointRepository,
      SessionEntity: this.sessionRepository,
      UserEntity: this.userRepository,
      AchievementEntity: this.achievementRepository,
      BadgeEntity: this.badgeRepository,
      EffectEntity: this.effectRepository,
      RoleEntity: this.roleRepository,
      SharedLinkEntity: this.sharedLinkRepository,
      ThemeEntity: this.themeRepository,
      RolePreferenceEntity: this.rolePreferenceRepository,
      TeamEntity: this.teamRepository,
      TeamMemberEntity: this.teamMemberRepository,
    };
  }

  // Abstracted methods
  private async seedEntity<T extends ObjectLiteral>(
    entity: Repository<T>,
    seedData: T[],
  ) {
    Logger.verbose(`Seeding ${entity.metadata.name}...`);
    await entity.save(seedData);
  }

  private async clearEntity<T extends ObjectLiteral>(entity: Repository<T>) {
    Logger.verbose(`Clearing ${entity.metadata.name}...`);
    await entity.delete({});
  }

  // Seed All Data
  async seedAll() {
    Logger.log('▶ Seeding database...');

    const seedMap = {
      ThemeEntity: SEED.themes,
      EffectEntity: SEED.effects,
      SharedLinkEntity: SEED.sharedLinks,
      RoleEntity: SEED.roles,
      UserEntity: SEED.users,
      TeamEntity: SEED.teams,
      TeamMemberEntity: SEED.teamMembers,
      RolePreferenceEntity: SEED.rolePreferences,
      AchievementEntity: SEED.achievements,
      BadgeEntity: SEED.badges,
      SessionEntity: SEED.sessions,
      PointEntity: SEED.points,
    };

    for (const [entityName, seedData] of Object.entries(seedMap)) {
      const repository = this.repositories[
        entityName as keyof typeof this.repositories
      ] as Repository<any>;
      await this.seedEntity(repository, seedData as any);
    }

    Logger.log('✅ Seeding complete!');
  }

  // Clear All Data
  async clearAll() {
    Logger.log('▶ Clearing database...');

    const clearEntities = [
      'PointEntity',
      'SessionEntity',
      'BadgeEntity',
      'AchievementEntity',
      'RolePreferenceEntity',
      'UserEntity',
      'TeamEntity',
      'TeamMemberEntity',
      'RoleEntity',
      'SharedLinkEntity',
      'EffectEntity',
      'ThemeEntity',
    ];

    for (const entityName of clearEntities) {
      const repository = this.repositories[
        entityName as keyof typeof this.repositories
      ] as Repository<any>;
      await this.clearEntity(repository);
    }

    Logger.log('✅ Clearing complete!');
  }

  async demoEventSubscribers() {
    Logger.log('▶ Demonstrating event subscribers...');
    // Earn Achievement (Triggers AchievementEarned Event)
    const newAchievement: OmitBaseEntityColumns<Entities.AchievementEntity> = {
      id: uuid(),
      achievementType: 'Master Player',
      user: SEED.users[1] as Entities.UserEntity,
    };
    Logger.verbose('Creating achievement...');
    await this.achievementRepository.save(newAchievement);

    // Earn Badge (Triggers BadgeEarned Event)
    const newBadge: OmitBaseEntityColumns<Entities.BadgeEntity> = {
      id: uuid(),
      badgeType: 'Platinum',
      user: SEED.users[1] as Entities.UserEntity,
    };
    Logger.verbose('Creating badge...');
    await this.badgeRepository.save(newBadge);

    // Update Theme (Triggers ThemeUpdated Event)
    const updatedTheme: Partial<Entities.ThemeEntity> = {
      name: 'Epic Adventure',
      premium: true,
    };
    Logger.verbose('Updating theme...');
    await this.themeRepository.update(SEED.themes[0].id, updatedTheme);

    // Earn Points (Triggers PointsEarned Event)
    const pointsEarned: OmitBaseEntityColumns<Entities.PointEntity> = {
      ...SEED.points[0],
      pointsEarned: SEED.points[0].pointsEarned + 20,
      pointsBalance: SEED.points[0].pointsBalance + 20,
    };
    Logger.verbose('Updating points... (earned)');
    await this.pointRepository.update(SEED.points[0].id, pointsEarned);

    // Spend Points (Triggers PointsSpent Event)
    const pointsSpent: OmitBaseEntityColumns<Entities.PointEntity> = {
      ...SEED.points[0],
      pointsSpent: SEED.points[0].pointsSpent + 10,
      pointsBalance: SEED.points[0].pointsBalance - 10,
    };
    Logger.verbose('Updating points... (spent)');
    await this.pointRepository.update(SEED.points[0].id, pointsSpent);

    Logger.log('✅ Demonstration complete!');
  }
}
