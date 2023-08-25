import { BaseEvent } from './_base.events.types';

// PointsEarned - Update user's points balance.
// PointsEarned - Notify user of points earned.
// PointsEarned - Update leaderboards or rankings.
// PointsSpent - Deduct points from user's balance.
// PointsSpent - Notify user of points spent.
// PointsSpent - Log the transaction for future reference.
export interface UserPointsChangedEvent extends BaseEvent {
  type: 'PointsEarned' | 'PointsSpent';
  userId: string;
  points: number;
}
