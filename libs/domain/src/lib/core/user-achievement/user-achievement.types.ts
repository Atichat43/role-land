import { ITimestampFields } from '../../_base.types';
import { IAchievement } from '../achievement';
import { IUser } from '../user';

export interface IUserAchievement extends ITimestampFields {
  milestoneCount: number; // This indicates which milestone the user achieved (e.g., 7, 14, 30).
  earnedDate: Date;
  earnedMonth: number; // Extracted from earnedDate
  earnedYear: number; // Extracted from earnedDate
  count: number; // Number of times this specific milestone has been earned by the user

  user: IUser;
  achievement: IAchievement;
}
