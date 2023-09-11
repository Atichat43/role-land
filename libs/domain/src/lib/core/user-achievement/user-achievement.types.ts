import { OmitBaseFields } from '../../_shared/types.helper';
import { ITimestampFields } from '../_base.types';
import { IAchievement, IAchievementMock } from '../achievement';
import { IUser, IUserMock } from '../user';

// --- User Achievement Interface ---
/**
 * @desc Represents the achievements earned by a user.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - milestoneCount: Number, >=1 indicates which milestone the user achieved (e.g., 7, 14, 30).
 * - earnedDate: Date, when the achievement was earned.
 * - earnedMonth: Number, >=1, <=12 month extracted from earnedDate.
 * - earnedYear: Number, year extracted from earnedDate.
 * - count: Number, >=1 The total number of times this specific milestone has been achieved.
 * - user: IUser, (ManyToOne)
 * - achievement: IAchievement (ManyToOne)
 * @example
 * For an achievement "Consecutive RoleLand Use" with milestones at 7, 14, and 30 days:
 * If a user achieves the 7-day milestone twice, once in January and once in February, the record might be:
 * {
 *   milestoneCount: 7,
 *   earnedDate: new Date('2023-02-07'),
 *   earnedMonth: 2,
 *   earnedYear: 2023,
 *   count: 2,
 *   user: { ...userDetails },
 *   achievement: { ...achievementDetails }
 * }
 */
export interface IUserAchievement extends ITimestampFields {
  id: string;
  milestoneCount: number;
  earnedDate: Date;
  earnedMonth: number;
  earnedYear: number;
  count: number;

  user: IUser;
  achievement: IAchievement;
}

export type IUserAchievementRaw = Omit<
  OmitBaseFields<IUserAchievement>,
  'user' | 'achievement'
>;
export type IUserAchievementExcludeSensitive = Omit<IUserAchievement, ''>;

export type IUserAchievementMock = Readonly<
  IUserAchievementRaw & { user: IUserMock; achievement: IAchievementMock }
>;

// inbound
export type IUserAchievementCreatePayload = Required<IUserAchievementRaw>;
export type IUserAchievementUpdatePayload = Partial<IUserAchievementRaw>;

// outbound
export type IUserAchievementView = Readonly<IUserAchievementExcludeSensitive>;
