import { RolePreferenceEnum } from './_enum.types';
import { User } from './aggregates.types';
import { Role } from './models.types';

// NOTE:
// Value objects are immutable and are identified by their properties.
// They are not identified by an id field.

/**
 * Profile Value Object
 * - bio: *<= 1000 chars*, can be empty
 * - interests[]: Array of strings
 */
export interface Profile {
  bio: string;
  interests: string[];
}

/**
 * RolePreference Value Object
 * - preference: RolePreferenceEnum
 * - customImage: **url, can be null**
 * - role: ManyToOne with validation
 * - user: ManyToOne with validation
 *
 * Note: This value object includes a ManyToOne relationship with Role.
 * 1. RolePreference can override certain attributes of Role (e.g., customImage).
 * 2. The integrity and operations on RolePreference are tightly coupled with Role.
 * 3. In PostgreSQL, this is represented as a separate entity.
 */
export interface RolePreference {
  preference: RolePreferenceEnum;
  customImage: string | null;

  // models
  role: Role;

  // aggregates
  user: User;
}
