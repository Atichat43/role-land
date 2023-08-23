import { UserEntity } from './aggregates/user/user.entity';
import { AchievementEntity } from './models/achievement/achievement.entity';
import { BadgeEntity } from './models/badge/badge.entity';
import { EffectEntity } from './models/effect/effect.entity';
import { RoleEntity } from './models/role/role.entity';
import { ThemeEntity } from './models/theme/theme.entity';

export const entities = [
  AchievementEntity,
  BadgeEntity,
  EffectEntity,
  RoleEntity,
  ThemeEntity,
  UserEntity,
];
