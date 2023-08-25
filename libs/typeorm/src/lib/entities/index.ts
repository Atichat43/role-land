import { AchievementEntity } from './achievement.entity';
import { BadgeEntity } from './badge.entity';
import { EffectEntity } from './effect.entity';
import { PointEntity } from './point.entity';
import { RoleEntity } from './role.entity';
import { SessionEntity } from './session.entity';
import { SharedLinkEntity } from './shared-link.entity';
import { UserSubscriber } from './subscriber/user.entity.subscriber';
import { ThemeEntity } from './theme.entity';
import { UserEntity } from './user.entity';

export const entities = [
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
];

export const subscribers = [UserSubscriber];
