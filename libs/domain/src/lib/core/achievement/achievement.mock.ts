import { v4 as uuid } from 'uuid';

import { EActionType } from '../action';
import { ERoleKey } from '../role/role.enum';
import {
  EAchievementCategory,
  ERegularUseSubCategory,
  EStackableLimit,
  IMergeTypeAchievementSubCategory,
} from './achievement.enum';
import { IAchievementMock } from './achievement.types';

const achievementDefaultMockData: IAchievementMock[] = [
  {
    id: uuid(),
    category: EAchievementCategory.RegularUse,
    subCategory: ERegularUseSubCategory.CompleteSession,
    name: 'Complete Session',
    milestones: [
      {
        count: 1,
        description: 'Complete 1 session.',
        iconUrl: 'https://example.com/complete1session.png',
        isStackable: false,
        stackableLimit: null,
      },
      {
        count: 5,
        description: 'Complete 5 sessions.',
        iconUrl: 'https://example.com/complete5sessions.png',
        isStackable: false,
        stackableLimit: null,
      },
      // ... add more milestones
    ],
  },
  {
    id: uuid(),
    category: EAchievementCategory.RegularUse,
    subCategory: ERegularUseSubCategory.Hosting,
    name: 'Hosting',
    milestones: [
      {
        count: 1,
        description: 'Host 1 session.',
        iconUrl: 'https://example.com/host1session.png',
        isStackable: false,
        stackableLimit: null,
      },
      {
        count: 5,
        description: 'Host 5 sessions.',
        iconUrl: 'https://example.com/host5sessions.png',
        isStackable: false,
        stackableLimit: null,
      },
      // ... add more milestones
    ],
  },
  {
    id: uuid(),
    category: EAchievementCategory.Roles,
    subCategory: ERoleKey.SdProductOwner,
    name: 'Product Owner',
    milestones: [
      {
        count: 10,
        description: 'Be "Product Owner" 10 times.',
        iconUrl: 'https://example.com/productowner10times.png',
        isStackable: false,
        stackableLimit: null,
      },
      {
        count: 25,
        description: 'Be "Product Owner" 25 times.',
        iconUrl: 'https://example.com/productowner25times.png',
        isStackable: false,
        stackableLimit: null,
      },
      // ... add more milestones
    ],
  },
  {
    id: uuid(),
    category: EAchievementCategory.Actions,
    subCategory: EActionType.Strategic,
    name: 'Strategic Action',
    milestones: [
      {
        count: 10,
        description: 'Use "Strategic" Action 10 times.',
        iconUrl: 'https://example.com/strategic10times.png',
        isStackable: false,
        stackableLimit: null,
      },
      {
        count: 50,
        description: 'Use "Strategic" Action 50 times.',
        iconUrl: 'https://example.com/strategic50times.png',
        isStackable: false,
        stackableLimit: null,
      },
      // ... add more milestones
    ],
  },
  {
    id: uuid(),
    name: 'Consecutive RoleLand Use',
    category: EAchievementCategory.RegularUse,
    subCategory: ERegularUseSubCategory.ConsecutiveUsage,
    milestones: [
      {
        count: 7,
        description: 'Use RoleLand 7 days consecutively.',
        iconUrl: 'https://example.com/consecutive7days.png',
        isStackable: true,
        stackableLimit: EStackableLimit.Monthly,
      },
      {
        count: 14,
        description: 'Use RoleLand 14 days consecutively.',
        iconUrl: 'https://example.com/consecutive14days.png',
        isStackable: true,
        stackableLimit: EStackableLimit.Monthly,
      },
      {
        count: 30,
        description: 'Use RoleLand 30 days consecutively.',
        iconUrl: 'https://example.com/consecutive30days.png',
        isStackable: true,
        stackableLimit: EStackableLimit.Monthly,
      },
    ],
  },
];

class AchievementMock {
  data: {
    default: IAchievementMock[];
  };

  constructor() {
    this.data = {
      default: achievementDefaultMockData,
    };
  }

  get(
    category: EAchievementCategory,
    subCategory: IMergeTypeAchievementSubCategory,
  ): IAchievementMock {
    const result = this.data.default.find((achievement) => {
      return (
        achievement.category === category &&
        achievement.subCategory === subCategory
      );
    });
    if (!result) throw new Error('Achievement not found');

    return result;
  }

  getAllAchievements(): IAchievementMock[] {
    return this.data.default;
  }
}

const achievementMock = new AchievementMock();

export default achievementMock;
