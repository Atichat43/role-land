import { AchievementEarnedSubscriber } from './achievement-earned.subscriber';
import { BadgeEarnedSubscriber } from './badge-earned.subscriber';
import { RoleLifecycleSubscriber } from './role-lifecycle.event-subscriber';
import { ThemeLifecycleSubscriber } from './theme-lifecycle.event-subscriber';
import { UserPointsChangedSubscriber } from './user-points-changed.event-subscriber';

export const EventSubscribers = [
  AchievementEarnedSubscriber,
  BadgeEarnedSubscriber,
  RoleLifecycleSubscriber,
  ThemeLifecycleSubscriber,
  UserPointsChangedSubscriber,
];

export default EventSubscribers;
