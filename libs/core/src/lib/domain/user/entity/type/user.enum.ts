// -- User Role Enum --
/**
 * @desc Enum representing the roles of users.
 * @values
 * - SuperAdmin: Full access to all API endpoints.
 * - Developer: Full access to all API endpoints except user management.
 * - Admin: CRUD achievement, action, role, theme.
 * - EndUser: CRUD on their own data.
 */
export enum EUserRole {
  SuperAdmin = 'super-admin', // full access to all API endpoints
  Developer = 'developer', // full access to all API endpoints except user management
  Admin = 'admin', // CRUD achievement, action, role, theme
  EndUser = 'end-user', // CRUD on their own data
}
