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

// NOTE: Groups related entities and value objects.

/**
 * User Domain Interface
 * - id: UUID
 * - username: **<= 25 chars, non-empty**
 * - globalName: **<= 25 chars, non-empty**
 * - avatar: **url, can be empty**
 * - premiumStatus: boolean *(default: false)*
 * - profile: *validated* value object
 * - rolePreferences[]: *validated* value object
 * - badges[]: **OneToMany** with NO validation
 * - achievements[]: **OneToMany** with NO validation
 * - teamMemberships[]: **OneToMany** with NO validation
 * ---
 * `extends ITimestampFields, ISoftDeletionFields`
 */
// Note:
// - Utilizes soft delete for analyzing user trends and maintaining historical data.
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

/**
 * TeamMember Domain Interface
 * - id: UUID
 * - teamMemberMembershipState: ETeamMemberMembershipState
 * - permissions[]: Array of strings
 * - user: ManyToOne with validation
 * - team: ManyToOne with validation
 */
export interface ITeamMember extends ITimestampFields {
  id: string;
  teamMemberMembershipState: ETeamMemberMembershipState;
  permissions: string[];

  // aggregates
  user: IUser;
  team: ITeam;
}

/**
 * Team Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - icon: **url, can be empty**
 * - owner: OneToOne with validation
 * - members[]: **OneToMany** with NO validation
 *
 * ---
 * `extends ITimestampFields, ISoftDeletionFields`
 */
export interface ITeam extends ITimestampFields, ISoftDeletionFields {
  id: string;

  name: string;
  icon: string | null;

  // aggregates
  owner: IUser;
  members: ITeamMember[];
}

/**
 * Session Domain Interface
 * - id: UUID
 * - status: ESessionStatus *(default: PENDING)* #Indexed
 * - sharedLink: OneToOne with validation
 * - theme: OneToOne with validation
 * - rolesAssigned[]: **ManyToMany** with NO validation
 * - participants[]: **ManyToMany** with NO validation
 * ---
 * `extends ITimestampFields`
 */
//  Note:
//  - Utilizes soft delete for analyzing past sessions (important interactions or events).
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

/**
 * Point Domain Interface
 * - id: UUID
 * - pointsEarned: >= 0 *(default: 0)*
 * - pointsSpent: >= 0 *(default: 0)*
 * - pointsBalance: >= 0 *(default: 0)*
 * - user: ManyToOne with validation
 * - session: ManyToOne with validation
 * ---
 * `extends ITimestampFields`
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
