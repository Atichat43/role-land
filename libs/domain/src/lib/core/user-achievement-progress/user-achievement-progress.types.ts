import { IAchievement } from '../achievement';
import { IUser } from '../user';

// --- IUserAchievementProgress Interface ---
/**
 * @desc Represents the ongoing progress of a user towards a specific achievement.
 *
 * @attributes
 * - id: UUID
 * - progressCount: >= 1 The current count of actions or events related to the achievement.
 * - lastUpdatedDate: The date when the progress was last updated.
 * - lastUpdatedMonth: The month component of the lastUpdatedDate.
 * - lastUpdatedYear: The year component of the lastUpdatedDate.
 * - user: IUser (ManyToOne)
 * - achievement: IAchievement (ManyToOne)
 *
 * @example
 * For an achievement "Consecutive RoleLand Use" with milestones at 7, 14, and 30 days:
 * If a user has used RoleLand for 5 consecutive days, the record might be:
 * {
 *   progressCount: 5,
 *   lastUpdatedDate: new Date('2023-02-05'),
 *   lastUpdatedMonth: 2,
 *   lastUpdatedYear: 2023,
 *   user: { ...userDetails },
 *   achievement: { ...achievementDetails }
 * }
 */
export interface IUserAchievementProgress {
  id: string;
  progressCount: number;
  lastUpdatedDate: Date;
  lastUpdatedMonth: number;
  lastUpdatedYear: number;

  user: IUser;
  achievement: IAchievement;
}
