import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { AchievementEntity } from '../entities/achievement.entity';
import { BadgeEntity } from '../entities/badge.entity';
import { EffectEntity } from '../entities/effect.entity';
import { PointEntity } from '../entities/point.entity';
import { RoleEntity } from '../entities/role.entity';
import { RolePreferenceEntity } from '../entities/role-preference.entity';
import { SessionEntity } from '../entities/session.entity';
import { SharedLinkEntity } from '../entities/shared-link.entity';
import { ThemeEntity } from '../entities/theme.entity';
import { UserEntity } from '../entities/user.entity';
import * as SEED from './index.seed';
import { OmitBaseEntityColumns } from './index.seed';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(PointEntity)
    private readonly pointRepository: Repository<PointEntity>,
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(AchievementEntity)
    private readonly achievementRepository: Repository<AchievementEntity>,
    @InjectRepository(BadgeEntity)
    private readonly badgeRepository: Repository<BadgeEntity>,
    @InjectRepository(EffectEntity)
    private readonly effectRepository: Repository<EffectEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    @InjectRepository(SharedLinkEntity)
    private readonly sharedLinkRepository: Repository<SharedLinkEntity>,
    @InjectRepository(ThemeEntity)
    private readonly themeRepository: Repository<ThemeEntity>,
    @InjectRepository(RolePreferenceEntity)
    private readonly rolePreferenceRepository: Repository<RolePreferenceEntity>,
  ) {}

  async clearAll() {
    Logger.log('▶ Clearing database...');

    await this.clearPoints();
    await this.clearSessions();
    await this.clearBadges();
    await this.clearAchievements();
    await this.clearRolePreferences();
    await this.clearUsers();
    await this.clearRoles();
    await this.clearSharedLinks();
    await this.clearEffects();
    await this.clearThemes();

    Logger.log('✅ Clearing complete!');
  }

  async seedAll() {
    Logger.log('▶ Seeding database...');

    await this.seedThemes();
    await this.seedEffects();
    await this.seedSharedLinks();
    await this.seedRoles();
    await this.seedUsers();
    await this.seedRolePreferences();
    await this.seedAchievements();
    await this.seedBadges();
    await this.seedSessions();
    await this.seedPoints();

    Logger.log('✅ Seeding complete!');
  }

  async demoEventSubscribers() {
    Logger.log('▶ Demonstrating event subscribers...');
    // Earn Achievement (Triggers AchievementEarned Event)
    const newAchievement: OmitBaseEntityColumns<AchievementEntity> = {
      id: uuid(),
      achievementType: 'Master Player',
      user: SEED.users[1] as UserEntity,
    };
    Logger.verbose('Creating achievement...');
    await this.achievementRepository.save(newAchievement);

    // Earn Badge (Triggers BadgeEarned Event)
    const newBadge: OmitBaseEntityColumns<BadgeEntity> = {
      id: uuid(),
      badgeType: 'Platinum',
      user: SEED.users[1] as UserEntity,
    };
    Logger.verbose('Creating badge...');
    await this.badgeRepository.save(newBadge);

    // Update Theme (Triggers ThemeUpdated Event)
    const updatedTheme: Partial<ThemeEntity> = {
      name: 'Epic Adventure',
      premium: true,
    };
    Logger.verbose('Updating theme...');
    await this.themeRepository.update(SEED.themes[0].id, updatedTheme);

    // Earn Points (Triggers PointsEarned Event)
    const pointsEarned: OmitBaseEntityColumns<PointEntity> = {
      ...SEED.points[0],
      pointsEarned: SEED.points[0].pointsEarned + 20,
      pointsBalance: SEED.points[0].pointsBalance + 20,
    };
    Logger.verbose('Updating points... (earned)');
    await this.pointRepository.update(SEED.points[0].id, pointsEarned);

    // Spend Points (Triggers PointsSpent Event)
    const pointsSpent: OmitBaseEntityColumns<PointEntity> = {
      ...SEED.points[0],
      pointsSpent: SEED.points[0].pointsSpent + 10,
      pointsBalance: SEED.points[0].pointsBalance - 10,
    };
    Logger.verbose('Updating points... (spent)');
    await this.pointRepository.update(SEED.points[0].id, pointsSpent);

    Logger.log('✅ Demonstration complete!');
  }

  private async seedThemes() {
    Logger.verbose('Seeding themes...');
    await this.themeRepository.save(SEED.themes);
  }

  private async clearThemes() {
    Logger.verbose('Clearing themes...');
    await this.themeRepository.delete({});
  }

  private async seedEffects() {
    Logger.verbose('Seeding effects...');
    await this.effectRepository.save(SEED.effects);
  }

  private async clearEffects() {
    Logger.verbose('Clearing effects...');
    await this.effectRepository.delete({});
  }

  private async seedSharedLinks() {
    Logger.verbose('Seeding shared links...');
    await this.sharedLinkRepository.save(SEED.sharedLinks);
  }

  private async clearSharedLinks() {
    Logger.verbose('Clearing shared links...');
    await this.sharedLinkRepository.delete({});
  }

  private async seedRoles() {
    Logger.verbose('Seeding roles...');
    await this.roleRepository.save(SEED.roles);
  }

  private async clearRoles() {
    Logger.verbose('Clearing roles...');
    await this.roleRepository.delete({});
  }

  private async seedUsers() {
    Logger.verbose('Seeding users...');
    await this.userRepository.save(SEED.users);
  }

  private async clearUsers() {
    Logger.verbose('Clearing users...');
    await this.userRepository.delete({});
  }

  private async seedRolePreferences() {
    Logger.verbose('Seeding role preferences...');
    await this.rolePreferenceRepository.save(SEED.rolePreferences);
  }

  private async clearRolePreferences() {
    Logger.verbose('Clearing role preferences...');
    await this.rolePreferenceRepository.delete({});
  }

  private async seedAchievements() {
    Logger.verbose('Seeding achievements...');
    await this.achievementRepository.save(SEED.achievements);
  }

  private async clearAchievements() {
    Logger.verbose('Clearing achievements...');
    await this.achievementRepository.delete({});
  }

  private async seedBadges() {
    Logger.verbose('Seeding badges...');
    await this.badgeRepository.save(SEED.badges);
  }

  private async clearBadges() {
    Logger.verbose('Clearing badges...');
    await this.badgeRepository.delete({});
  }

  private async seedSessions() {
    Logger.verbose('Seeding sessions...');
    await this.sessionRepository.save(SEED.sessions);
  }

  private async clearSessions() {
    Logger.verbose('Clearing sessions...');
    await this.sessionRepository.delete({});
  }

  private async seedPoints() {
    Logger.verbose('Seeding points...');
    await this.pointRepository.save(SEED.points);
  }

  private async clearPoints() {
    Logger.verbose('Clearing points...');
    await this.pointRepository.delete({});
  }
}
