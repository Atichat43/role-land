import { IBaseEvent } from './_base.events.types';

// --- UserPointsChanged Event Interface ---
/**
 * @desc Holds the user points changed event-related domain information.
 * @extend IBaseEvent
 * @attributes
 * - type: 'PointsEarned' | 'PointsSpent'
 * - userId: String, non-empty
 * - points: Number, non-negative
 * @notes
 * - PointsEarned use cases - Update user's points balance.
 * - PointsEarned use cases - Notify user of points earned.
 * - PointsEarned use cases - Update leaderboards or rankings.
 * - PointsSpent use cases - Deduct points from user's balance.
 * - PointsSpent use cases - Notify user of points spent.
 * - PointsSpent use cases - Log the transaction for future reference.
 */
export interface IUserPointsChangedEvent extends IBaseEvent {
  type: 'PointsEarned' | 'PointsSpent';
  userId: string;
  points: number;
}
