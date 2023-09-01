import { ISoftDeletionFields, ITimestampFields } from './_base.types';
import { ESessionStatus, ETeamMemberMembershipState } from './_enum.types';
import {
  IAchievement,
  IBadge,
  IRole,
  ISharedLink,
  ITheme,
} from './models.types';
import { IProfile, IRolePreference } from './value-objects.types';

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
 *  - profile: IProfile (Value Object)
 *  - rolePreferences: Array of IRolePreference (Value Object)
 *  - badges: Array of IBadge (OneToMany)
 *  - achievements: Array of IAchievement (OneToMany)
 *  - teamMemberships: Array of ITeamMember (OneToMany)
 * @notes
 * - Utilizes soft delete for analyzing user trends and maintaining historical data.
 * -
 */
export interface IUser extends ITimestampFields, ISoftDeletionFields {
  id: string;
  username: string;
  globalName: string;
  premiumStatus: boolean;
  avatar: string | null;

  // value objects
  profile: IProfile;
  rolePreferences: IRolePreference[];

  // models
  badges: IBadge[];
  achievements: IAchievement[];

  // aggregates
  teamMemberships: ITeamMember[];
}

// --- Team Member Interface ---
/**
 * @desc Holds the team member-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - teamMemberMembershipState: ETeamMemberMembershipState
 * - permissions: Array of strings
 * - user: IUser (ManyToOne)
 * - team: ITeam (ManyToOne)
 */
export interface ITeamMember extends ITimestampFields {
  id: string;
  teamMemberMembershipState: ETeamMemberMembershipState;
  permissions: string[];

  // aggregates
  user: IUser;
  team: ITeam;
}

// --- Team Interface ---
/**
 * @desc Holds the team-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - icon: URL or null
 * - owner: IUser (OneToOne)
 * - members: Array of ITeamMember (OneToMany)
 */
export interface ITeam extends ITimestampFields, ISoftDeletionFields {
  id: string;

  name: string;
  icon: string | null;

  // aggregates
  owner: IUser;
  members: ITeamMember[];
}

// --- Session Interface ---
/**
 * @desc Holds the session-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 * - id: UUID
 * - status: ESessionStatus, default PENDING , Indexed
 * - sharedLink: ISharedLink (OneToOne)
 * - theme: ITheme (OneToOne)
 * - rolesAssigned: Array of IRole (ManyToMany)
 * - participants: Array of IUser (ManyToMany)
 * @notes
 * - Utilizes soft delete for analyzing past sessions (important interactions or events).
 */
export interface ISession extends ITimestampFields, ISoftDeletionFields {
  id: string;
  status: ESessionStatus;

  // models
  sharedLink: ISharedLink;
  theme: ITheme;

  // aggregates
  rolesAssigned: IRole[];
  participants: IUser[];
}

// --- Point Interface ---
/**
 * @desc Holds the point-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - pointsEarned: Number, >=0, default 0
 * - pointsSpent: Number, >=0, default 0
 * - pointsBalance: Number, >=0, default 0
 * - user: IUser (ManyToOne)
 * - session: ISession (ManyToOne)
 */
export interface IPoint extends ITimestampFields {
  id: string;
  pointsEarned: number;
  pointsSpent: number;
  pointsBalance: number;

  // aggregates
  user: IUser;
  session: ISession;
}
