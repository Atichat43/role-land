import { PointEntity } from './aggregates/point/point.entity';
import { RoleRecordEntity } from './aggregates/role-record/role-record.entity';
import { SessionEntity } from './aggregates/session/session.entity';
import { UserEntity } from './aggregates/user/user.entity';

import { AchievementEntity } from './models/achievement/achievement.entity';
import { BadgeEntity } from './models/badge/badge.entity';
import { EffectEntity } from './models/effect/effect.entity';
import { RoleEntity } from './models/role/role.entity';
import { SharedLinkEntity } from './models/shared-link/shared-link.entity';
import { ThemeEntity } from './models/theme/theme.entity';

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
