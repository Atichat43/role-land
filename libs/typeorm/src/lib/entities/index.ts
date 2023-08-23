import { PointEntity } from './aggregates/point.entity';
import { RoleRecordEntity } from './aggregates/role-record.entity';
import { SessionEntity } from './aggregates/session.entity';
import { UserEntity } from './aggregates/user.entity';

import { AchievementEntity } from './models/achievement.entity';
import { BadgeEntity } from './models/badge.entity';
import { EffectEntity } from './models/effect.entity';
import { RoleEntity } from './models/role.entity';
import { SharedLinkEntity } from './models/shared-link.entity';
import { ThemeEntity } from './models/theme.entity';

export const entities = [
  // aggregates
  PointEntity,
  RoleRecordEntity,
  SessionEntity,
  UserEntity,

  // models
  AchievementEntity,
  BadgeEntity,
  EffectEntity,
  RoleEntity,
  SharedLinkEntity,
  ThemeEntity,
];
