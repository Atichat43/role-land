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
 * ThemeLifecycle Event Interface
 * - type: 'ThemeCreated' | 'ThemeUpdated' | 'ThemeDeleted'
 * - themeId: string, *non-empty*
 * ---
 * use cases:
 * - ThemeCreated - Log the creation of a new theme.
 * - ThemeCreated - Update available themes list.
 * - ThemeUpdated - Log updates to a theme.
 * - ThemeUpdated - Notify users if a theme they prefer has been updated.
 * - ThemeDeleted - Log the deletion of a theme.
 * - ThemeDeleted - Update available themes list.
 */
export interface ThemeLifecycleEvent extends BaseEvent {
  type: 'ThemeCreated' | 'ThemeUpdated' | 'ThemeDeleted';
  themeId: string;
}
