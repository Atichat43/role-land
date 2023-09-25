import { EActionType as EActionSubCategory } from '../action';
import { ERoleKey as ERoleSubCategory } from '../role/role.enum';

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

// --- Regular Use Sub Category Enum ---
/**
 * @desc Enum representing the subcategories under regular use.
 * @values
 * - ConsecutiveUsage: Achievements for using RoleLand consecutively.
 * - Hosting: Achievements for hosting sessions.
 * - CompleteSession: Achievements for completing sessions.
 */
export enum ERegularUseSubCategory {
  ConsecutiveUsage = 'consecutive_usage',
  Hosting = 'hosting',
  CompleteSession = 'complete_session',
}

// --- Achievement Sub Category Type ---
/**
 * @desc Type representing the subcategories of achievements.
 * It combines subcategories from regular use, roles, and actions.
 */
export type IMergeTypeAchievementSubCategory =
  | ERegularUseSubCategory
  | ERoleSubCategory
  | EActionSubCategory;

export const MERGE_TYPE_ACHIEVEMENT_SUB_CATEGORY: IMergeTypeAchievementSubCategory[] =
  ([] as IMergeTypeAchievementSubCategory[]).concat(
    Object.values(ERegularUseSubCategory),
    Object.values(ERoleSubCategory),
    Object.values(EActionSubCategory),
  );

// --- Stackable Limit Enum ---
/**
 * @desc Enum representing the limits for stackable achievements.
 * @values
 * - Monthly: Achievements that can be stacked once a month.
 */
export enum EStackableLimit {
  Monthly = 'monthly',
}
