import { EActionType } from '../action';
import { ERoleKey } from '../role/role.enum';

// --- Achievement Category Enum ---
/**
 * @desc Enum representing the main categories of achievements.
 * @values
 * - RegularUse: Achievements related to regular usage patterns.
 * - Roles: Achievements related to specific role assignments.
 * - Actions: Achievements related to specific actions taken.
 */
export enum EAchievementCategory {
  RegularUse = 'regular_use',
  Roles = 'roles',
  Actions = 'actions',
}

// --- Achievement Sub Category Type ---
/**
 * @desc Type representing the subcategories of achievements.
 * It combines subcategories from regular use, roles, and actions.
 */
export type EAchievementSubCategory =
  | ERegularUseSubCategory
  | ERoleSubCategory
  | EActionSubCategory;

// --- Regular Use Sub Category Enum ---
/**
 * @desc Enum representing the subcategories under regular use.
 * @values
 * - ConsecutiveUsage: Achievements for using RoleLand consecutively.
 * - Hosting: Achievements for hosting sessions.
 * - CompleteSession: Achievements for completing sessions.
 */
export enum ERegularUseSubCategory {
  ConsecutiveUsage = 'regular_use:consecutive_usage',
  Hosting = 'regular_use:hosting',
  CompleteSession = 'regular_use:complete_session',
}

// --- Role Sub Category Type ---
/**
 * @desc Type representing the subcategories related to roles.
 * It refers to the ERoleKey type which lists all available roles.
 */
export type ERoleSubCategory = ERoleKey;

// --- Action Sub Category Type ---
/**
 * @desc Type representing the subcategories related to actions.
 * It refers to the EActionType type which lists all available actions.
 */
export type EActionSubCategory = EActionType;

// --- Stackable Limit Enum ---
/**
 * @desc Enum representing the limits for stackable achievements.
 * @values
 * - Monthly: Achievements that can be stacked once a month.
 */
export enum EStackableLimit {
  Monthly = 'monthly',
}
