import { AchievementEntity } from './achievement.entity';
import { BadgeEntity } from './badge.entity';
import { EffectEntity } from './effect.entity';
import { PointEntity } from './point.entity';
import { RoleEntity } from './role.entity';
import { RolePreferenceEntity } from './role-preference.entity';
import { SessionEntity } from './session.entity';
import { SharedLinkEntity } from './shared-link.entity';
import { ThemeEntity } from './theme.entity';
import { UserEntity } from './user.entity';

export const Entities = [
  // aggregates
  PointEntity,
  SessionEntity,
  UserEntity,

  // models
  AchievementEntity,
  BadgeEntity,
  EffectEntity,
  RoleEntity,
  SharedLinkEntity,
  ThemeEntity,

  // embeds
  RolePreferenceEntity,
];

export default Entities;
