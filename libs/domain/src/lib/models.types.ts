import { ITimestampFields } from './_base.types';
import { IUser } from './aggregates.types';

// NOTE: Core business models and interfaces.

/**
 * Achievement Domain Interface
 * - id: UUID
 * - achievementType: string, *non-empty*
 * - user: ManyToOne with validation
 * ---
 * `extends ITimestampFields`
 */
export interface IAchievement extends ITimestampFields {
  id: string;
  achievementType: string;

  // aggregates
  user: IUser;
}

/**
 * Badge Domain Interface
 * - id: UUID
 * - badgeType: string, *non-empty*
 * - user: ManyToOne with validation
 * ---
 * `extends ITimestampFields`
 */
export interface IBadge extends ITimestampFields {
  id: string;
  badgeType: string;

  // aggregates
  user: IUser;
}

/**
 * Effect Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - premium: boolean *(default: false)*
 * ---
 * `extends ITimestampFields`
 */
export interface IEffect extends ITimestampFields {
  id: string;
  name: string;
  premium: boolean;
}

/**
 * Role Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - attributes[]: Array of strings
 * - defaultImage: **url, can be null**
 * - theme: ManyToOne with validation
 * ---
 * `extends ITimestampFields`
 */
// Role can be created and updated by users.
export interface IRole extends ITimestampFields {
  id: string;
  name: string;
  attributes: string[];

  defaultImage: string | null;
  theme: ITheme;
}

/**
 * Theme Domain Interface
 * - id: UUID
 * - name: **<= 25 chars, non-empty**
 * - premium: boolean *(default: false)* #Indexed
 * - roles[]: **OneToMany** with NO validation
 * ---
 * `extends ITimestampFields`
 */
// Themes can be created and updated by users.
export interface ITheme extends ITimestampFields {
  id: string;
  name: string;
  premium: boolean;

  // models
  roles: IRole[];
}

/**
 * SharedLink Domain Interface
 * - id: UUID
 * - url: **url** #Unique #Indexed
 * - isActive: boolean *(default: false)*
 * ---
 * `extends ITimestampFields`
 */
export interface ISharedLink extends ITimestampFields {
  id: string;
  url: string;
  isActive: boolean;
}
