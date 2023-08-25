import { Role } from './models.types';

// NOTE:
// Value objects are immutable and are identified by their properties.
// They are not identified by an id field.

export interface Profile {
  bio: string;
  interests: string[];
}

export enum RolePreferenceEnum {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export interface RolePreference {
  role: Role;
  preference: RolePreferenceEnum;
}
