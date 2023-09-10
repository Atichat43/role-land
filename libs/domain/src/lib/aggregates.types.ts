import { ITimestampFields } from './_base.types';
import { ISession } from './core/session/session.types';
import { IUser } from './core/user';

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
