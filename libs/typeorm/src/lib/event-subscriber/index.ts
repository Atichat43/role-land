import { AchievementEarnedSubscriber } from './achievement-earned.subscriber';
import { RoleLifecycleSubscriber } from './role-lifecycle.event-subscriber';
import { ThemeLifecycleSubscriber } from './theme-lifecycle.event-subscriber';

export const EventSubscribers = [
  AchievementEarnedSubscriber,
  RoleLifecycleSubscriber,
  ThemeLifecycleSubscriber,
];

export default EventSubscribers;
