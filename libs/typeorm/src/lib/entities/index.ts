import { AchievementEntity } from './achievement.entity';
import { ActionEntity } from './action.entity';
import { BadgeEntity } from './badge.entity';
import { EffectEntity } from './effect.entity';
import { PointEntity } from './point.entity';
import { RoleEntity } from './role.entity';
import { RolePreferenceEntity } from './role-preference.entity';
import { SessionEntity } from './session.entity';
import { SharedLinkEntity } from './shared-link.entity';
import { TeamEntity } from './team.entity';
import { TeamMemberEntity } from './team-member.entity';
import { ThemeEntity } from './theme.entity';
import { UserEntity } from './user.entity';
import { UserAchievementEntity } from './user-achievement.entity';

export {
  AchievementEntity,
  ActionEntity,
  BadgeEntity,
  EffectEntity,
  PointEntity,
  RoleEntity,
  RolePreferenceEntity,
  SessionEntity,
  SharedLinkEntity,
  TeamEntity,
  TeamMemberEntity,
  ThemeEntity,
  UserAchievementEntity,
  UserEntity,
};

export const Entities = [
  // aggregates
  PointEntity,
  SessionEntity,
  UserEntity,
  TeamEntity,
  TeamMemberEntity,
  UserAchievementEntity,

  // models
  AchievementEntity,
  ActionEntity,
  BadgeEntity,
  EffectEntity,
  RoleEntity,
  SharedLinkEntity,
  ThemeEntity,

  // embeds
  RolePreferenceEntity,
];

export default Entities;
