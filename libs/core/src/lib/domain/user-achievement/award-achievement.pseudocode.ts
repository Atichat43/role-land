// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { IAchievement } from '../achievement';
import { IUserAchievement } from './user-achievement.types';

function awardAchievement(
  userId: string,
  achievementId: string,
  milestoneCount: number,
  userAchievements: IUserAchievement[],
  achievements: IAchievement[],
) {
  const achievement = achievements.find((a) => a.id === achievementId);
  const milestone = achievement?.milestones.find(
    (m) => m.count === milestoneCount,
  );

  if (
    milestone &&
    milestone.isStackable &&
    milestone.stackableLimit === 'monthly'
  ) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const existingUserAchievement = userAchievements.find(
      (ua) =>
        ua.userId === userId &&
        ua.achievementId === achievementId &&
        ua.milestoneCount === milestoneCount &&
        ua.earnedMonth === currentMonth &&
        ua.earnedYear === currentYear,
    );

    if (!existingUserAchievement) {
      // Award the achievement and add a new entry to the userAchievements array
      userAchievements.push({
        userId,
        achievementId,
        milestoneCount,
        earnedDate: currentDate,
        earnedMonth: currentMonth,
        earnedYear: currentYear,
        count: 1,
      });
    }
  } else {
    // Logic for non-stackable achievements or other stackable limits
  }
}
