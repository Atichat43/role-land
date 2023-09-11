import { v4 as uuid } from 'uuid';

import achievementMock from '../achievement/achievement.mock';
import userMock from '../user/user.mock';
import { IUserAchievementProgressMock } from './user-achievement-progress.types';

/**
 * user: role-land-expert
 * achievement:
 * - Complete Session 10 (10 Sep 2023)
 * - Hosting 5 (10 Sep 2023)
 * - Be Product Owner 25 (8 Sep 2023)
 * - Use Strategic Action 50 times (9 Sep 2023)
 * - Use RoleLand:
 *  - Jan 2023: 7 days consecutively
 *  - Feb 2023: 8 days consecutively
 *  - Mar 2023: 13 days consecutively
 *  - Apr 2023: 14 days consecutively
 *  - May 2023: 30 days consecutively
 *  - Jun 2023: 30 days consecutively
 *  - Jul 2023: 30 days consecutively
 *  - Aug 2023: 30 days consecutively
 *  - Sep 2023: 10 days consecutively (10 Sep 2023)
 */

const userAchievementProgressesRoleLandExpertMockData: IUserAchievementProgressMock[] =
  [
    {
      id: uuid(),
      progressCount: 10,
      lastUpdatedDate: new Date('2023-09-10'),
      lastUpdatedMonth: 9,
      lastUpdatedYear: 2023,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Complete Session'),
    },
    {
      id: uuid(),
      progressCount: 5,
      lastUpdatedDate: new Date('2023-09-05'),
      lastUpdatedMonth: 9,
      lastUpdatedYear: 2023,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Hosting'),
    },
    {
      id: uuid(),
      progressCount: 25,
      lastUpdatedDate: new Date('2023-09-08'),
      lastUpdatedMonth: 9,
      lastUpdatedYear: 2023,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Product Owner'),
    },
    {
      id: uuid(),
      progressCount: 50,
      lastUpdatedDate: new Date('2023-09-09'),
      lastUpdatedMonth: 9,
      lastUpdatedYear: 2023,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Strategic Action'),
    },
    {
      id: uuid(),
      progressCount: 10,
      lastUpdatedDate: new Date('2023-09-10'),
      lastUpdatedMonth: 9,
      lastUpdatedYear: 2023,
      user: userMock.get('role-land-expert'),
      achievement: achievementMock.get('Consecutive RoleLand Use'),
    },
  ];

class UserAchievementProgressMock {
  data: {
    default: IUserAchievementProgressMock[];
  };

  constructor() {
    this.data = {
      default: userAchievementProgressesRoleLandExpertMockData,
    };
  }

  get(
    achievementName:
      | 'Complete Session'
      | 'Hosting'
      | 'Product Owner'
      | 'Strategic Action'
      | 'Consecutive RoleLand Use',
  ): IUserAchievementProgressMock {
    const result = this.data.default.find((userAchievementProgress) => {
      return userAchievementProgress.achievement.name === achievementName;
    });

    if (!result) {
      throw new Error(
        `UserAchievementProgressMock: cannot find user achievement progress with achievement name ${achievementName}`,
      );
    }

    return result;
  }

  getAllUserAchievementProgresses(): IUserAchievementProgressMock[] {
    return this.data.default;
  }
}

const userAchievementProgressMock = new UserAchievementProgressMock();

export default userAchievementProgressMock;
