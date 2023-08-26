import { BaseEvent } from './_base.events.types';

/**
 * RoleLifecycle Event Interface
 * - type: 'RoleCreated' | 'RoleDeleted'
 * - roleId: string, *non-empty*
 * ---
 * use cases:
 * - RoleCreated - Log the creation of a new role.
 * - RoleCreated - Notify administrators or other stakeholders.
 * - RoleCreated - Update available roles list.
 * - RoleDeleted - Log the deletion of a role.
 * - RoleDeleted - Update available roles list.
 */
export interface RoleLifecycleEvent extends BaseEvent {
  type: 'RoleCreated' | 'RoleDeleted';
  roleId: string;
}

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
export interface BadgeEarnedEvent extends BaseEvent {
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
export interface AchievementEarnedEvent extends BaseEvent {
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
export interface RoleAssignedEvent extends BaseEvent {
  type: 'RoleAssigned';
  roleId: string;
  userId: string;
}
