import { ISoftDeletionFields, ITimestampFields } from './_base.types';
import { ESessionStatus } from './_enum.types';
import { IRole } from './core/role';
import { ITheme } from './core/theme';
import { IUser } from './core/user';
import { ISharedLink } from './models.types';

// --- Session Interface ---
/**
 * @desc Holds the session-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 * - id: UUID
 * - status: ESessionStatus, default PENDING , Indexed
 * - sharedLink: ISharedLink (OneToOne)
 * - theme: ITheme (OneToOne)
 * - rolesAssigned: Array of IRole (ManyToMany)
 * - participants: Array of IUser (ManyToMany)
 * @notes
 * - Utilizes soft delete for analyzing past sessions (important interactions or events).
 */
export interface ISession extends ITimestampFields, ISoftDeletionFields {
  id: string;
  status: ESessionStatus;

  // models
  sharedLink: ISharedLink;
  theme: ITheme;

  // aggregates
  rolesAssigned: IRole[];
  participants: IUser[];
}

// --- Point Interface ---
/**
 * @desc Holds the point-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - pointsEarned: Number, >=0, default 0
 * - pointsSpent: Number, >=0, default 0
 * - pointsBalance: Number, >=0, default 0
 * - user: IUser (ManyToOne)
 * - session: ISession (ManyToOne)
 */
export interface IPoint extends ITimestampFields {
  id: string;
  pointsEarned: number;
  pointsSpent: number;
  pointsBalance: number;

  // aggregates
  user: IUser;
  session: ISession;
}
