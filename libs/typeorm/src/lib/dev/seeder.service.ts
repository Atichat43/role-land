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
    Logger.log('Seeding themes...');
    await this.themeRepository.save(SEED.themes);
  }

  private async seedEffects() {
    Logger.log('Seeding effects...');
    await this.effectRepository.save(SEED.effects);
  }

  private async seedSharedLinks() {
    Logger.log('Seeding shared links...');
    await this.sharedLinkRepository.save(SEED.sharedLinks);
  }

  private async seedRoles() {
    Logger.log('Seeding roles...');
    await this.roleRepository.save(SEED.roles);
  }

  private async seedUsers() {
    Logger.log('Seeding users...');
    await this.userRepository.save(SEED.users);
  }

  private async seedAchievements() {
    Logger.log('Seeding achievements...');
    await this.achievementRepository.save(SEED.achievements);
  }

  private async seedBadges() {
    Logger.log('Seeding badges...');
    await this.badgeRepository.save(SEED.badges);
  }

  private async seedSessions() {
    Logger.log('Seeding sessions...');
    await this.sessionRepository.save(SEED.sessions);
  }

  private async seedPoints() {
    Logger.log('Seeding points...');
    await this.pointRepository.save(SEED.points);
  }

  private async seedRoleRecords() {
    Logger.log('Seeding role records...');
    await this.roleRecordRepository.save(SEED.roleRecords);
  }
}
