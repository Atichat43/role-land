import { Timestamps } from './_base.types';
import { User } from './aggregates.types';

// NOTE: Core business models and interfaces.

/**
 * Achievement Domain Interface
 * - id: UUID
 * - achievementType: string, *non-empty*
 * - user: ManyToOne with validation
 * ---
 * `extends Timestamps`
 */
export interface Achievement extends Timestamps {
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
 * `extends Timestamps`
 */
export interface Badge extends Timestamps {
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
 * `extends Timestamps`
 */
export interface Effect extends Timestamps {
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
 * `extends Timestamps`
 */
// Role can be created and updated by users.
export interface Role extends Timestamps {
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
 * `extends Timestamps`
 */
// Themes can be created and updated by users.
export interface Theme extends Timestamps {
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
 * `extends Timestamps`
 */
export interface SharedLink extends Timestamps {
  id: string;
  url: string;
  isActive: boolean;
}
