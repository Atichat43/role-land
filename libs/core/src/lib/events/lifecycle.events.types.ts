import { IBaseEvent } from './_base.events.types';

// --- RoleLifecycle Event Interface ---
/**
 * @desc Holds the role lifecycle event-related domain information.
 * @extend IBaseEvent
 * @attributes
 * - type: 'RoleCreated' | 'RoleDeleted'
 * - roleId: String, non-empty
 * @notes
 * - RoleCreated use cases - Log the creation of a new role.
 * - RoleCreated use cases - Notify administrators or other stakeholders.
 * - RoleCreated use cases - Update available roles list.
 * - RoleDeleted use cases - Log the deletion of a role.
 * - RoleDeleted use cases - Update available roles list.
 */
export interface IRoleLifecycleEvent extends IBaseEvent {
  type: 'RoleCreated' | 'RoleDeleted';
  roleId: string;
}

// --- ThemeLifecycle Event Interface ---
/**
 * @desc Holds the theme lifecycle event-related domain information.
 * @extend IBaseEvent
 * @attributes
 * - type: 'ThemeCreated' | 'ThemeUpdated' | 'ThemeDeleted'
 * - themeId: String, non-empty
 * @notes
 * - ThemeCreated use cases - Log the creation of a new theme.
 * - ThemeCreated use cases - Update available themes list.
 * - ThemeUpdated use cases - Log updates to a theme.
 * - ThemeUpdated use cases - Notify users if a theme they prefer has been updated.
 * - ThemeDeleted use cases - Log the deletion of a theme.
 * - ThemeDeleted use cases - Update available themes list.
 */
export interface IThemeLifecycleEvent extends IBaseEvent {
  type: 'ThemeCreated' | 'ThemeUpdated' | 'ThemeDeleted';
  themeId: string;
}
