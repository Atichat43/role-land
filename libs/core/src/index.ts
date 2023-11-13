export * from './lib/_shared/code';
export * from './lib/_shared/exception';
export * from './lib/_shared/persistence';
export * from './lib/domain/_base.types';
export * from './lib/domain/achievement';
export * from './lib/domain/action';
export * from './lib/domain/auth-provider';
export * from './lib/domain/role';
export * from './lib/domain/session';
export * from './lib/domain/shared-link';
export * from './lib/domain/team';
export * from './lib/domain/team-member';
export * from './lib/domain/theme';
export * from './lib/domain/user';
export * from './lib/domain/user-achievement';
export * from './lib/domain/user-achievement-progress';
export * from './lib/errors/report.error.types';
export * from './lib/events/changed.events.types';
export * from './lib/events/lifecycle.events.types';
export * from './lib/events/record.events.types';
export * from './lib/service';

import achievementMock from './lib/domain/achievement/achievement.mock';
import actionMock from './lib/domain/action/action.mock';
import { authProviderMock } from './lib/domain/auth-provider/entity/mock';
import roleMock from './lib/domain/role/role.mock';
import sessionMock from './lib/domain/session/session.mock';
import sharedLinkMock from './lib/domain/shared-link/shared-link.mock';
import teamMock from './lib/domain/team/team.mock';
import teamMemberMock from './lib/domain/team-member/team-member.mock';
import themeMock from './lib/domain/theme/theme.mock';
import { userMock } from './lib/domain/user/entity/mock';
import userAchievementMock from './lib/domain/user-achievement/user-achievement.mock';
import userAchievementProgressMock from './lib/domain/user-achievement-progress/user-achievement-progress.mock';

export const SEED = {
  authProviderMock,
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
