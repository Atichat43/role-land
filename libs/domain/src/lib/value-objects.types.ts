import { RolePreferenceEnum } from './_enum.types';
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
 * - role: ManyToOne with validation
 */
export interface RolePreference {
  role: Role;
  preference: RolePreferenceEnum;
}
