import { ITimestampFields } from '../../_base.types';
import { OmitBaseFields } from '../../_shared/types.helper';
import { IUserAchievementProgress } from '../user-achievement-progress';
import {
  EAchievementCategory,
  EStackableLimit,
  IMergeTypeAchievementSubCategory,
} from './achievement.enum';

// --- Achievement Milestone Interface ---
/**
 * @desc Holds the achievement milestone-related domain information.
 * @attributes
 * - count: Number, non-negative
 * - iconUrl: URL
 * - description: String, max 100 characters, non-empty
 * - isStackable: Boolean
 * - stackableLimit: EStackableLimit or null
 */
export interface IAchievementMilestone {
  count: number;
  iconUrl: string;
  description: string;

  isStackable: boolean;
  stackableLimit: EStackableLimit | null;
}

// --- Achievement Interface ---
/**
 * @desc Holds the achievement-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - category: EAchievementCategory
 * - subCategory: IMergeTypeAchievementSubCategory
 * - milestones: Array of IAchievementMilestone
 * - userAchievementProgresses: Array of IUserAchievementProgress (OneToMany)
 */
export interface IAchievement extends ITimestampFields {
  id: string;
  name: string;

  category: EAchievementCategory;
  subCategory: IMergeTypeAchievementSubCategory;

  milestones: IAchievementMilestone[];

  userAchievementProgresses: IUserAchievementProgress[];
}

export type IAchievementRaw = Omit<
  OmitBaseFields<IAchievement>,
  'userAchievementProgresses'
>;
export type IAchievementExcludeSensitive = Omit<IAchievement, ''>;

export type IAchievementMock = Readonly<IAchievementRaw>;

// inbound
export type IAchievementCreatePayload = Required<IAchievementRaw>;
export type IAchievementUpdatePayload = Partial<IAchievementRaw>;

// outbound
export type IAchievementView = Readonly<IAchievementExcludeSensitive>;
