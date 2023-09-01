import { IBaseEvent } from './_base.events.types';

// --- BadgeEarned Event Interface ---
/**
 * @desc Holds the badge earned event-related domain information.
 * @extend IBaseEvent
 * @attributes
 * - type: 'BadgeEarned'
 * - userId: String, non-empty
 * - badgeId: String, non-empty
 * @notes
 * - BadgeEarned use cases - Update badge earned history for business analytics.
 * - BadgeEarned use cases - Notify user of a new badge earned.
 * - BadgeEarned use cases - Update user's profile with the new badge.
 * - BadgeEarned use cases - Log the badge earning event.
 */
export interface IBadgeEarnedEvent extends IBaseEvent {
  type: 'BadgeEarned';
  userId: string;
  badgeId: string;
}

// --- AchievementEarned Event Interface ---
/**
 * @desc Holds the achievement earned event-related domain information.
 * @extend IBaseEvent
 * @attributes
 * - type: 'AchievementEarned'
 * - userId: String, non-empty
 * - achievementId: String, non-empty
 * @notes
 * - AchievementEarned use cases - Update achievement earned history for business analytics.
 * - AchievementEarned use cases - Notify user of a new achievement earned.
 * - AchievementEarned use cases - Update user's profile with the new achievement.
 * - AchievementEarned use cases - Log the achievement earning event.
 */
export interface IAchievementEarnedEvent extends IBaseEvent {
  type: 'AchievementEarned';
  userId: string;
  achievementId: string;
}

// --- RoleAssigned Event Interface ---
/**
 * @desc Holds the role assigned event-related domain information.
 * @extend IBaseEvent
 * @attributes
 * - type: 'RoleAssigned'
 * - roleId: String, non-empty
 * - userId: String, non-empty
 * @notes
 * - RoleAssigned use cases - Update role assignment history for balanced assignment.
 * - RoleAssigned use cases - Notify users of their assigned role.
 * - RoleAssigned use cases - Trigger any effects or visuals related to the role.
 */
export interface IRoleAssignedEvent extends IBaseEvent {
  type: 'RoleAssigned';
  roleId: string;
  userId: string;
}
