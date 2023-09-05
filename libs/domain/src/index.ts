export * from './lib/_base.types';
export * from './lib/_enum.types';
export * from './lib/aggregates.types';
export * from './lib/core/action';
export * from './lib/core/role';
export * from './lib/core/theme';
export * from './lib/errors/report.error.types';
export * from './lib/events/changed.events.types';
export * from './lib/events/lifecycle.events.types';
export * from './lib/events/record.events.types';
export * from './lib/models.types';
export * from './lib/value-objects.types';

import actionMock from './lib/core/action/action.mock';
import roleMock from './lib/core/role/role.mock';
import themeMock from './lib/core/theme/theme.mock';

export const SEED = {
  actionMock,
  roleMock,
  themeMock,
};
