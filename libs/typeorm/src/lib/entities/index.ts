// export * from './achievement/achievement.entity';
// export * from './badge/badge.entity';
// export * from './effect/effect.entity';
// export * from './role/role.entity';
// export * from './theme/theme.entity';
// export * from './user/user.entity';

import { AchievementEntity } from './achievement/achievement.entity';
import { BadgeEntity } from './badge/badge.entity';
import { EffectEntity } from './effect/effect.entity';
import { RoleEntity } from './role/role.entity';
import { ThemeEntity } from './theme/theme.entity';
import { UserEntity } from './user/user.entity';

export const entities = [
  AchievementEntity,
  BadgeEntity,
  EffectEntity,
  RoleEntity,
  ThemeEntity,
  UserEntity,
];
