import { BaseEvent } from './_base.events.types';

// BadgeEarned - Update badge earned history for business analytics.
// BadgeEarned - Notify user of a new badge earned.
// BadgeEarned - Update user's profile with the new badge.
// BadgeEarned - Log the badge earning event.
export interface BadgeEarnedEvent extends BaseEvent {
  type: 'BadgeEarned';
  userId: string;
  badgeId: string;
}

// BadgeEarned - Update achievement earned history for business analytics.
// AchievementEarned - Notify user of a new achievement earned.
// AchievementEarned - Update user's profile with the new achievement.
// AchievementEarned - Log the achievement earning event.
export interface AchievementEarnedEvent extends BaseEvent {
  type: 'AchievementEarned';
  userId: string;
  achievementId: string;
}

// RoleAssigned - Update role assignment history for balanced assignment.
// RoleAssigned - Notify users of their assigned role.
// RoleAssigned - Trigger any effects or visuals related to the role.
export interface RoleAssignedEvent extends BaseEvent {
  type: 'RoleAssigned';
  roleId: string;
  userId: string;
}
