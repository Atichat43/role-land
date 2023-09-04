export * from './lib/_base.types';
export * from './lib/_enum.types';
export * from './lib/aggregates.types';
export * from './lib/core/action';
export * from './lib/errors/report.error.types';
export * from './lib/events/changed.events.types';
export * from './lib/events/lifecycle.events.types';
export * from './lib/events/record.events.types';
export * from './lib/models.types';
export * from './lib/value-objects.types';

import action from './lib/core/action/action.mock';

export const SEED = {
  action,
};
