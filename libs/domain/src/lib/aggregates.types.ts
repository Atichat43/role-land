import { SoftDeletionFields, TimestampFields } from './_base.types';
import {
  SessionStatusEnum,
  TeamMemberMembershipStateEnum,
} from './_enum.types';
import { Achievement, Badge, Role, SharedLink, Theme } from './models.types';
import { Profile, RolePreference } from './value-objects.types';

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
 * `extends TimestampFields, SoftDeletionFields`
 */
// Note:
// - Utilizes soft delete for analyzing user trends and maintaining historical data.
export interface User extends TimestampFields, SoftDeletionFields {
  id: string;
  username: string;
  globalName: string;
  premiumStatus: boolean;
  avatar: string | null;

  // value objects
  profile: Profile;
  rolePreferences: RolePreference[];

  // models
  badges: Badge[];
  achievements: Achievement[];

  // aggregates
  teamMemberships: TeamMember[];
}

/**
 * TeamMember Domain Interface
 * - id: UUID
 * - teamMemberMembershipState: TeamMemberMembershipStateEnum
 * - permissions[]: Array of strings
 * - user: ManyToOne with validation
 * - team: ManyToOne with validation
 */
export interface TeamMember extends TimestampFields {
  id: string;
  teamMemberMembershipState: TeamMemberMembershipStateEnum;
  permissions: string[];

  // aggregates
  user: User;
  team: Team;
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
 * `extends TimestampFields, SoftDeletionFields`
 */
export interface Team extends TimestampFields, SoftDeletionFields {
  id: string;

  name: string;
  icon: string | null;

  // aggregates
  owner: User;
  members: TeamMember[];
}

/**
 * Session Domain Interface
 * - id: UUID
 * - status: SessionStatusEnum *(default: PENDING)* #Indexed
 * - sharedLink: OneToOne with validation
 * - theme: OneToOne with validation
 * - rolesAssigned[]: **ManyToMany** with NO validation
 * - participants[]: **ManyToMany** with NO validation
 * ---
 * `extends TimestampFields`
 */
//  Note:
//  - Utilizes soft delete for analyzing past sessions (important interactions or events).
export interface Session extends TimestampFields, SoftDeletionFields {
  id: string;
  status: SessionStatusEnum;

  // models
  sharedLink: SharedLink;
  theme: Theme;

  // aggregates
  rolesAssigned: Role[];
  participants: User[];
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
 * `extends TimestampFields`
 */
export interface Point extends TimestampFields {
  id: string;
  pointsEarned: number;
  pointsSpent: number;
  pointsBalance: number;

  // aggregates
  user: User;
  session: Session;
}
