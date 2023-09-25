import { Nullable } from '@role-land/utility-types';

import { OmitBaseFields } from '../../../../_shared/types.helper';
import { ISoftDeletionFields, ITimestampFields } from '../../../_base.types';
import { ITeam } from '../../../team';
import { ITeamMember } from '../../../team-member';
import { IUserAchievement } from '../../../user-achievement';
import { IUserAchievementProgress } from '../../../user-achievement-progress';
import { IMergeUsernames } from '../../entity/mock/user.mock.types';
import { IUserProfile } from './user-profile.value-object.types';

// --- User Interface ---
/**
 * @desc Holds the user-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 *  - id: UUID
 *  - username: String, max 25 characters, non-empty
 *  - globalName: String, max 25 characters, non-empty
 *  - avatar: URL or null
 *  - premiumStatus: Boolean, default false
 *  - profile: IUserProfile (Value Object)
 *  - userAchievements: Array of IUserAchievement (OneToMany)
 *  - userAchievementProgresses: Array of IUserAchievementProgress (OneToMany)
 *  - teamMemberships: Array of ITeamMember (OneToMany)
 *  - teamsOwned: Array of ITeam (OneToMany)
 * @notes
 * - Utilizes soft delete for analyzing user trends and maintaining historical data.
 * -
 */
export interface IUser extends ITimestampFields, ISoftDeletionFields {
  id: string;
  readonly username: string;
  readonly password: string;
  globalName: string;
  premiumStatus: boolean;
  avatar: Nullable<string>;

  // value objects
  profile: IUserProfile;

  // models
  userAchievements: IUserAchievement[];
  userAchievementProgresses: IUserAchievementProgress[];

  // aggregates
  teamMemberships: ITeamMember[];
  teamsOwned: ITeam[];
}

export type IUserRaw = Omit<
  OmitBaseFields<IUser>,
  | 'rolePreferences'
  | 'badges'
  | 'userAchievements'
  | 'userAchievementProgresses'
  | 'teamMemberships'
  | 'teamsOwned'
>;
export type IUserExcludeSensitive = Omit<IUser, 'password'>;

// NOTE: roles should be empty array in mocking process due to circular dependency with role who has User
export type IUserMock = Readonly<
  Omit<IUserRaw, 'username' | 'password'> & { username: IMergeUsernames }
>;

// inbound
export type IUserCreatePayload = Required<IUserRaw>;
export type IUserUpdatePayload = Partial<IUserRaw>;

// outbound
export type IUserView = Readonly<IUserExcludeSensitive>;
