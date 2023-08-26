import { SoftDeletion, Timestamps } from './_base.types';
import { SessionStatusEnum } from './_enum.types';
import { Achievement, Badge, Role, SharedLink, Theme } from './models.types';
import { Profile, RolePreference } from './value-objects.types';

// NOTE: Groups related entities and value objects.

/**
 * User Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - premiumStatus: boolean *(default: false)*
 * - profile: *validated* value object
 * - rolePreferences[]: *validated* value object
 * - badges[]: **OneToMany** with NO validation
 * - achievements[]: **OneToMany** with NO validation
 * ---
 * `extends Timestamps, SoftDeletion`
 */
export interface User extends Timestamps, SoftDeletion {
  id: string;
  name: string;
  premiumStatus: boolean;

  // value objects
  profile: Profile;
  rolePreferences: RolePreference[];

  // models
  badges: Badge[];
  achievements: Achievement[];
}

// generate document interface for session
/**
 * Session Domain Interface
 * - id: UUID
 * - status: SessionStatusEnum *(default: PENDING)*
 * - sharedLink: OneToOne with validation
 * - theme: OneToOne with validation
 * - rolesAssigned[]: **ManyToMany** with NO validation
 * - participants[]: **ManyToMany** with NO validation
 * ---
 * `extends Timestamps`
 */
export interface Session extends Timestamps {
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
 * `extends Timestamps`
 */
export interface Point extends Timestamps {
  id: string;
  pointsEarned: number;
  pointsSpent: number;
  pointsBalance: number;

  // aggregates
  user: User;
  session: Session;
}
