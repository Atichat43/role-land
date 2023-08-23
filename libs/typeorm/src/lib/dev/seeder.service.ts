import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PointEntity } from '../entities/aggregates/point.entity';
import { RoleRecordEntity } from '../entities/aggregates/role-record.entity';
import { SessionEntity } from '../entities/aggregates/session.entity';
import { UserEntity } from '../entities/aggregates/user.entity';

import { AchievementEntity } from '../entities/models/achievement.entity';
import { BadgeEntity } from '../entities/models/badge.entity';
import { EffectEntity } from '../entities/models/effect.entity';
import { RoleEntity } from '../entities/models/role.entity';
import { SharedLinkEntity } from '../entities/models/shared-link.entity';
import { ThemeEntity } from '../entities/models/theme.entity';

import * as SEED from '../entities/index.seed';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(PointEntity)
    private readonly pointRepository: Repository<PointEntity>,
    @InjectRepository(RoleRecordEntity)
    private readonly roleRecordRepository: Repository<RoleRecordEntity>,
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
  ) {}

  async clearAll() {
    Logger.log('▶ Clearing database...');

    await this.clearRoleRecords();
    await this.clearPoints();
    await this.clearSessions();
    await this.clearBadges();
    await this.clearAchievements();
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
    await this.seedAchievements();
    await this.seedBadges();
    await this.seedSessions();
    await this.seedPoints();
    await this.seedRoleRecords();

    Logger.log('✅ Seeding complete!');
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

  private async seedRoleRecords() {
    Logger.verbose('Seeding role records...');
    await this.roleRecordRepository.save(SEED.roleRecords);
  }

  private async clearRoleRecords() {
    Logger.verbose('Clearing role records...');
    await this.roleRecordRepository.delete({});
  }
}
