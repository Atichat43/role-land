import { ERolePreference } from './_enum.types';
import { IRole } from './core/role';
import { IUser } from './core/user';

// --- Role Preference (Value Object) Interface ---
/**
 * @desc Holds the role preference-related domain information.
 * @attributes
 * - preference: ERolePreference
 * - customImage: URL or null
 * - role: IRole (ManyToOne)
 * - user: IUser (ManyToOne)
 * @notes
 * - This value object includes a ManyToOne relationship with Role.
 * - RolePreference can override certain attributes of Role (e.g., customImage).
 * - The integrity and operations on RolePreference are tightly coupled with Role.
 * - In PostgreSQL, this is represented as a separate entity.
 */
export interface IRolePreference {
  preference: ERolePreference;
  customImage: string | null;

  // models
  role: IRole;

  // aggregates
  user: IUser;
}
