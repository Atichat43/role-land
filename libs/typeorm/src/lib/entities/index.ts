import {
  AchievementEntity,
  AchievementEntityTableName,
} from './achievement.entity';
import { ActionEntity, ActionEntityTableName } from './action.entity';
import { EffectEntity, EffectEntityTableName } from './effect.entity';
import { PointEntity, PointEntityTableName } from './point.entity';
import { RoleEntity, RoleEntityTableName } from './role.entity';
import {
  RolePreferenceEntity,
  RolePreferenceEntityTableName,
} from './role-preference.entity';
import {
  Session_Participants__UserTableName,
  Session_RolesAvailable__RoleTableName,
  SessionEntity,
  SessionEntityTableName,
} from './session.entity';
import {
  SharedLinkEntity,
  SharedLinkEntityTableName,
} from './shared-link.entity';
import { TeamEntity, TeamEntityTableName } from './team.entity';
import {
  TeamMemberEntity,
  TeamMemberEntityTableName,
} from './team-member.entity';
import { ThemeEntity, ThemeEntityTableName } from './theme.entity';
import { UserEntity, UserEntityTableName } from './user.entity';
import {
  UserAchievementEntity,
  UserAchievementEntityTableName,
} from './user-achievement.entity';
import {
  UserAchievementProgressEntity,
  UserAchievementProgressEntityTableName,
} from './user-achievement-progress.entity';

export {
  AchievementEntity,
  AchievementEntityTableName,
  ActionEntity,
  ActionEntityTableName,
  EffectEntity,
  EffectEntityTableName,
  PointEntity,
  PointEntityTableName,
  RoleEntity,
  RoleEntityTableName,
  RolePreferenceEntity,
  RolePreferenceEntityTableName,
  Session_Participants__UserTableName,
  Session_RolesAvailable__RoleTableName,
  SessionEntity,
  SessionEntityTableName,
  SharedLinkEntity,
  SharedLinkEntityTableName,
  TeamEntity,
  TeamEntityTableName,
  TeamMemberEntity,
  TeamMemberEntityTableName,
  ThemeEntity,
  ThemeEntityTableName,
  UserAchievementEntity,
  UserAchievementEntityTableName,
  UserAchievementProgressEntity,
  UserAchievementProgressEntityTableName,
  UserEntity,
  UserEntityTableName,
};

export const Entities = [
  // aggregates
  PointEntity,
  SessionEntity,
  UserEntity,
  TeamEntity,
  TeamMemberEntity,
  UserAchievementEntity,
  UserAchievementProgressEntity,

  // models
  AchievementEntity,
  ActionEntity,
  EffectEntity,
  RoleEntity,
  SharedLinkEntity,
  ThemeEntity,

  // embeds
  RolePreferenceEntity,
];

export default Entities;
