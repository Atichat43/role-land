import { ITimestampFields } from './_base.types';
import { IUser } from './aggregates.types';

// --- Achievement Interface ---
/**
 * @desc Holds the achievement-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - achievementType: String, non-empty
 * - user: IUser (ManyToOne)
 */
export interface IAchievement extends ITimestampFields {
  id: string;
  achievementType: string;

  // aggregates
  user: IUser;
}

// --- Badge Interface ---
/**
 * @desc Holds the badge-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - badgeType: String, non-empty
 * - user: IUser (ManyToOne)
 */
export interface IBadge extends ITimestampFields {
  id: string;
  badgeType: string;

  // aggregates
  user: IUser;
}

// --- Effect Interface ---
/**
 * @desc Holds the effect-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - premium: boolean, default false
 */
export interface IEffect extends ITimestampFields {
  id: string;
  name: string;
  premium: boolean;
}

// --- Role Interface ---
/**
 * @desc Holds the role-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - attributes: Array of strings
 * - defaultImage: URL or null
 * - theme: ITheme (ManyToOne)
 * @notes
 * - Roles can be created and updated by users.
 */
export interface IRole extends ITimestampFields {
  id: string;
  name: string;
  attributes: string[];

  defaultImage: string | null;
  theme: ITheme;
}

// --- Theme Interface ---
/**
 * @desc Holds the theme-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - premium: Boolean, default false, Indexed
 * - roles: Array of IRole (OneToMany)
 * @notes
 * - Themes can be created and updated by users.
 */
export interface ITheme extends ITimestampFields {
  id: string;
  name: string;
  premium: boolean;

  // models
  roles: IRole[];
}

// --- Shared Link Interface ---
/**
 * @desc Holds the shared link-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - url: URL, unique, indexed
 * - isActive: boolean, default false
 */
export interface ISharedLink extends ITimestampFields {
  id: string;
  url: string;
  isActive: boolean;
}
