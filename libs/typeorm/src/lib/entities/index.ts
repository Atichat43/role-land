import {
  AchievementEntity,
  AchievementEntityTableName,
} from './achievement.entity';
import { ActionEntity, ActionEntityTableName } from './action.entity';
import { RoleEntity, RoleEntityTableName } from './role.entity';
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
  RoleEntity,
  RoleEntityTableName,
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
  SessionEntity,
  UserEntity,
  TeamEntity,
  TeamMemberEntity,
  UserAchievementEntity,
  UserAchievementProgressEntity,

  // models
  AchievementEntity,
  ActionEntity,
  RoleEntity,
  SharedLinkEntity,
  ThemeEntity,
];

export default Entities;
