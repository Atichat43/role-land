import { IBaseEvent } from './_base.events.types';

/**
 * BadgeEarned Event Interface
 * - type: 'BadgeEarned'
 * - userId: string, *non-empty*
 * - badgeId: string, *non-empty*
 * ---
 * use cases:
 * - BadgeEarned - Update badge earned history for business analytics.
 * - BadgeEarned - Notify user of a new badge earned.
 * - BadgeEarned - Update user's profile with the new badge.
 * - BadgeEarned - Log the badge earning event.
 */
export interface IBadgeEarnedEvent extends IBaseEvent {
  type: 'BadgeEarned';
  userId: string;
  badgeId: string;
}

/**
 * AchievementEarned Event Interface
 * - type: 'AchievementEarned'
 * - userId: string, *non-empty*
 * - achievementId: string, *non-empty*
 * ---
 * use cases:
 * - AchievementEarned - Update achievement earned history for business analytics.
 * - AchievementEarned - Notify user of a new achievement earned.
 * - AchievementEarned - Update user's profile with the new achievement.
 * - AchievementEarned - Log the achievement earning event.
 */
export interface IAchievementEarnedEvent extends IBaseEvent {
  type: 'AchievementEarned';
  userId: string;
  achievementId: string;
}

/**
 * RoleAssigned Event Interface
 * - type: 'RoleAssigned'
 * - roleId: string, *non-empty*
 * - userId: string, *non-empty*
 * ---
 * use cases:
 * - RoleAssigned - Update role assignment history for balanced assignment.
 * - RoleAssigned - Notify users of their assigned role.
 * - RoleAssigned - Trigger any effects or visuals related to the role.
 */
export interface IRoleAssignedEvent extends IBaseEvent {
  type: 'RoleAssigned';
  roleId: string;
  userId: string;
}
