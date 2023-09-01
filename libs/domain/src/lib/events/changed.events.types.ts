import { IBaseEvent } from './_base.events.types';

/**
 * UserPointsChanged Event Interface
 * - type: 'PointsEarned' | 'PointsSpent'
 * - userId: string, *non-empty*
 * - points: number, *non-negative*
 * ---
 * use cases:
 * - PointsEarned - Update user's points balance.
 * - PointsEarned - Notify user of points earned.
 * - PointsEarned - Update leaderboards or rankings.
 * - PointsSpent - Deduct points from user's balance.
 * - PointsSpent - Notify user of points spent.
 * - PointsSpent - Log the transaction for future reference.
 */
export interface IUserPointsChangedEvent extends IBaseEvent {
  type: 'PointsEarned' | 'PointsSpent';
  userId: string;
  points: number;
}
