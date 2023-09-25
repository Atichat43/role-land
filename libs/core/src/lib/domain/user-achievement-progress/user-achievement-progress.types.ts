import { OmitBaseFields } from '../../_shared/types.helper';
import { IAchievement, IAchievementMock } from '../achievement';
import { IUser, IUserMock } from '../user';

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

export type IUserAchievementProgressRaw = Omit<
  OmitBaseFields<IUserAchievementProgress>,
  'user' | 'achievement'
>;
export type IUserAchievementProgressExcludeSensitive = Omit<
  IUserAchievementProgress,
  ''
>;

export type IUserAchievementProgressMock = Readonly<
  IUserAchievementProgressRaw & {
    user: IUserMock;
    achievement: IAchievementMock;
  }
>;

// inbound
export type IUserAchievementProgressCreatePayload =
  Required<IUserAchievementProgressRaw>;
export type IUserAchievementProgressUpdatePayload =
  Partial<IUserAchievementProgressRaw>;

// outbound
export type IUserAchievementProgressView =
  Readonly<IUserAchievementProgressExcludeSensitive>;
