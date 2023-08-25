// RoleCreated - Log the creation of a new role.
// RoleCreated - Notify administrators or other stakeholders.
// RoleCreated - Update available roles list.
// RoleUpdated - Log updates to a role.
// RoleUpdated - Notify users if a role they prefer has been updated.
// RoleDeleted - Log the deletion of a role.
// RoleDeleted - Update available roles list.
export interface RoleLifecycleEvent {
  type: 'RoleCreated' | 'RoleDeleted';
  roleId: string;
}

// RoleAssigned - Update role assignment history for balanced assignment.
// RoleAssigned - Notify users of their assigned role.
// RoleAssigned - Trigger any effects or visuals related to the role.
export interface RoleAssignedEvent {
  type: 'RoleAssigned';
  roleId: string;
  userId: string;
}

// PointsEarned - Update user's points balance.
// PointsEarned - Notify user of points earned.
// PointsEarned - Update leaderboards or rankings.
// PointsSpent - Deduct points from user's balance.
// PointsSpent - Notify user of points spent.
// PointsSpent - Log the transaction for future reference.
export interface UserPointsChangedEvent {
  type: 'PointsEarned' | 'PointsSpent';
  userId: string;
  points: number;
}

// ThemeCreated - Log the creation of a new theme.
// ThemeCreated - Update available themes list.
// ThemeUpdated - Log updates to a theme.
// ThemeUpdated - Notify users if a theme they prefer has been updated.
// ThemeDeleted - Log the deletion of a theme.
// ThemeDeleted - Update available themes list.
export interface ThemeLifecycleEvent {
  type: 'ThemeCreated' | 'ThemeUpdated' | 'ThemeDeleted';
  themeId: string;
}

// BadgeEarned - Notify user of a new badge earned.
// BadgeEarned - Update user's profile with the new badge.
// BadgeEarned - Log the badge earning event.
export interface BadgeEarnedEvent {
  type: 'BadgeEarned';
  userId: string;
  badgeId: string;
}

// AchievementEarned - Notify user of a new achievement earned.
// AchievementEarned - Update user's profile with the new achievement.
// AchievementEarned - Log the achievement earning event.
export interface AchievementEarnedEvent {
  type: 'AchievementEarned';
  userId: string;
  achievementId: string;
}
