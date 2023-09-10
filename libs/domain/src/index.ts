export * from './lib/_base.types';
export * from './lib/_enum.types';
export * from './lib/aggregates.types';
export * from './lib/core/achievement';
export * from './lib/core/action';
export * from './lib/core/role';
export * from './lib/core/session';
export * from './lib/core/shared-link';
export * from './lib/core/team';
export * from './lib/core/team-member';
export * from './lib/core/theme';
export * from './lib/core/user';
export * from './lib/core/user-achievement';
export * from './lib/core/user-achievement-progress';
export * from './lib/errors/report.error.types';
export * from './lib/events/changed.events.types';
export * from './lib/events/lifecycle.events.types';
export * from './lib/events/record.events.types';
export * from './lib/models.types';
export * from './lib/value-objects.types';

import achievementMock from './lib/core/achievement/achievement.mock';
import actionMock from './lib/core/action/action.mock';
import roleMock from './lib/core/role/role.mock';
import sessionMock from './lib/core/session/session.mock';
import sharedLinkMock from './lib/core/shared-link/shared-link.mock';
import teamMock from './lib/core/team/team.mock';
import teamMemberMock from './lib/core/team-member/team-member.mock';
import themeMock from './lib/core/theme/theme.mock';
import userMock from './lib/core/user/user.mock';
import userAchievementMock from './lib/core/user-achievement/user-achievement.mock';
import userAchievementProgressMock from './lib/core/user-achievement-progress/user-achievement-progress.mock';

export const SEED = {
  achievementMock,
  actionMock,
  roleMock,
  sessionMock,
  sharedLinkMock,
  teamMemberMock,
  teamMock,
  themeMock,
  userAchievementMock,
  userAchievementProgressMock,
  userMock,
};
