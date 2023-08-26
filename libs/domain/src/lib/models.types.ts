import { TimestampFields } from './_base.types';
import { User } from './aggregates.types';

// NOTE: Core business models and interfaces.

/**
 * Achievement Domain Interface
 * - id: UUID
 * - achievementType: string, *non-empty*
 * - user: ManyToOne with validation
 * ---
 * `extends TimestampFields`
 */
export interface Achievement extends TimestampFields {
  id: string;
  achievementType: string;

  // aggregates
  user: User;
}

/**
 * Badge Domain Interface
 * - id: UUID
 * - badgeType: string, *non-empty*
 * - user: ManyToOne with validation
 * ---
 * `extends TimestampFields`
 */
export interface Badge extends TimestampFields {
  id: string;
  badgeType: string;

  // aggregates
  user: User;
}

/**
 * Effect Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - premium: boolean *(default: false)*
 * ---
 * `extends TimestampFields`
 */
export interface Effect extends TimestampFields {
  id: string;
  name: string;
  premium: boolean;
}

/**
 * Role Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - theme: ManyToOne with validation
 * - attributes[]: Array of strings
 * ---
 * `extends TimestampFields`
 */
// Role can be created and updated by users.
export interface Role extends TimestampFields {
  id: string;
  name: string;
  theme: Theme;
  attributes: string[];
}

/**
 * Theme Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - premium: boolean *(default: false)*
 * - roles[]: **OneToMany** with NO validation
 * ---
 * `extends TimestampFields`
 */
// Themes can be created and updated by users.
export interface Theme extends TimestampFields {
  id: string;
  name: string;
  premium: boolean;

  // models
  roles: Role[];
}

/**
 * SharedLink Domain Interface
 * - id: UUID
 * - url: **url**
 * - isActive: boolean *(default: false)*
 * ---
 * `extends TimestampFields`
 */
export interface SharedLink extends TimestampFields {
  id: string;
  url: string;
  isActive: boolean;
}
