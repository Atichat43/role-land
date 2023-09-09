import { IBaseEvent } from './_base.events.types';

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
