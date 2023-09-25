import { v4 as uuid } from 'uuid';

import achievementMock from '../achievement/achievement.mock';
import { userMock } from '../user/entity/mock';
import { IUserAchievementMock } from './user-achievement.types';

/**
 * user: role-land-expert
 * achievement:
 * - Complete Session:
 *  - 2023-09-01: 1 session
 *  - 2023-09-05: 5 sessions
 *  - 2023-09-10: 10 sessions
 * - Hosting:
 * - 2023-09-01: 1 session
 * - 2023-09-05: 5 sessions
 * - Product Owner:
 * - 2023-09-10: 10 sessions
 * - 2023-09-25: 25 sessions
 *  - Strategic Action:
 * - 2023-09-10: 10 sessions
 * - 2023-10-20: 50 sessions
 * - Use RoleLand:
 * - 2023-01-07: 7 days consecutively
 * - 2023-02-07: 7 days consecutively
 * - 2023-03-07: 7 days consecutively
 * - 2023-04-07: 7 days consecutively
 * - 2023-04-14: 14 days consecutively
 * - 2023-05-07: 7 days consecutively
 * - 2023-05-14: 14 days consecutively
 * - 2023-05-30: 30 days consecutively
 * - 2023-06-07: 7 days consecutively
 * - 2023-06-14: 14 days consecutively
 * - 2023-06-30: 30 days consecutively
 * - 2023-07-07: 7 days consecutively
 * - 2023-07-14: 14 days consecutively
 * - 2023-07-30: 30 days consecutively
 * - 2023-08-07: 7 days consecutively
 * - 2023-08-14: 14 days consecutively
 * - 2023-08-30: 30 days consecutively
 * - 2023-09-07: 7 days consecutively
 */

const userAchievementCompleteSessionRoleLandExpertMockData: IUserAchievementMock[] =
  [
    {
      id: uuid(),
      milestoneCount: 1,
      earnedDate: new Date('2023-09-01'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Complete Session'),
    },
    {
      id: uuid(),
      milestoneCount: 5,
      earnedDate: new Date('2023-09-05'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Complete Session'),
    },
    {
      id: uuid(),
      milestoneCount: 10,
      earnedDate: new Date('2023-09-10'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Complete Session'),
    },
  ];
const userAchievementHostingRoleLandExpertMockData: IUserAchievementMock[] = [
  {
    id: uuid(),
    milestoneCount: 1,
    earnedDate: new Date('2023-09-01'),
    earnedMonth: 9,
    earnedYear: 2023,
    count: 1,
    user: userMock.get('role-land-expert'),
    achievement: achievementMock.get('Hosting'),
  },
  {
    id: uuid(),
    milestoneCount: 5,
    earnedDate: new Date('2023-09-05'),
    earnedMonth: 9,
    earnedYear: 2023,
    count: 1,
    user: userMock.get('role-land-expert'),
    achievement: achievementMock.get('Hosting'),
  },
];
const userAchievementProductOwnerRoleLandExpertMockData: IUserAchievementMock[] =
  [
    {
      id: uuid(),
      milestoneCount: 10,
      earnedDate: new Date('2023-09-10'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Product Owner'),
    },
    {
      id: uuid(),
      milestoneCount: 25,
      earnedDate: new Date('2023-09-25'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Product Owner'),
    },
  ];

const userAchievementStrategicActionRoleLandExpertMockData: IUserAchievementMock[] =
  [
    {
      id: uuid(),
      milestoneCount: 10,
      earnedDate: new Date('2023-09-10'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Strategic Action'),
    },
    {
      id: uuid(),
      milestoneCount: 50,
      earnedDate: new Date('2023-10-20'),
      earnedMonth: 10,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Strategic Action'),
    },
  ];

const userAchievementConsecutiveRoleLandUseRoleLandExpertMockData: IUserAchievementMock[] =
  [
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-01-07'),
      earnedMonth: 1,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-02-07'),
      earnedMonth: 2,
      earnedYear: 2023,
      count: 2,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-03-07'),
      earnedMonth: 3,
      earnedYear: 2023,
      count: 3,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-04-07'),
      earnedMonth: 4,
      earnedYear: 2023,
      count: 4,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 14,
      earnedDate: new Date('2023-04-14'),
      earnedMonth: 4,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-05-07'),
      earnedMonth: 5,
      earnedYear: 2023,
      count: 5,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 14,
      earnedDate: new Date('2023-05-14'),
      earnedMonth: 5,
      earnedYear: 2023,
      count: 2,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 30,
      earnedDate: new Date('2023-05-30'),
      earnedMonth: 5,
      earnedYear: 2023,
      count: 1,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-06-07'),
      earnedMonth: 6,
      earnedYear: 2023,
      count: 6,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },

    {
      id: uuid(),
      milestoneCount: 14,
      earnedDate: new Date('2023-06-14'),
      earnedMonth: 6,
      earnedYear: 2023,
      count: 3,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },

    {
      id: uuid(),
      milestoneCount: 30,
      earnedDate: new Date('2023-06-30'),
      earnedMonth: 6,
      earnedYear: 2023,
      count: 2,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },

    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-07-07'),
      earnedMonth: 7,
      earnedYear: 2023,
      count: 7,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },

    {
      id: uuid(),
      milestoneCount: 14,
      earnedDate: new Date('2023-07-14'),
      earnedMonth: 7,
      earnedYear: 2023,
      count: 4,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },

    {
      id: uuid(),
      milestoneCount: 30,
      earnedDate: new Date('2023-07-30'),
      earnedMonth: 7,
      earnedYear: 2023,
      count: 3,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },

    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-08-07'),
      earnedMonth: 8,
      earnedYear: 2023,
      count: 8,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 14,
      earnedDate: new Date('2023-08-14'),
      earnedMonth: 8,
      earnedYear: 2023,
      count: 5,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 30,
      earnedDate: new Date('2023-08-30'),
      earnedMonth: 8,
      earnedYear: 2023,
      count: 4,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
    {
      id: uuid(),
      milestoneCount: 7,
      earnedDate: new Date('2023-09-07'),
      earnedMonth: 9,
      earnedYear: 2023,
      count: 9,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
  ];

class UserAchievementMock {
  data: {
    default: IUserAchievementMock[];
  };

  constructor() {
    this.data = {
      default: [
        ...userAchievementCompleteSessionRoleLandExpertMockData,
        ...userAchievementHostingRoleLandExpertMockData,
        ...userAchievementProductOwnerRoleLandExpertMockData,
        ...userAchievementStrategicActionRoleLandExpertMockData,
        ...userAchievementConsecutiveRoleLandUseRoleLandExpertMockData,
      ],
    };
  }

  get(
    achievementName:
      | 'Complete Session'
      | 'Hosting'
      | 'Product Owner'
      | 'Strategic Action'
      | 'Consecutive RoleLand Use',
  ): IUserAchievementMock[] {
    return this.data.default.filter((userAchievement) => {
      return userAchievement.achievement.name === achievementName;
    });
  }

  getAllUserAchievements(): IUserAchievementMock[] {
    return this.data.default;
  }
}

const userAchievementMock = new UserAchievementMock();

export default userAchievementMock;
