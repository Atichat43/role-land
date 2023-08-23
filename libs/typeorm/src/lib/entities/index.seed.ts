import { RolePreferenceEnum } from '../core/value-objects';

import { PointEntity } from './aggregates/point.entity';
import { RoleRecordEntity } from './aggregates/role-record.entity';
import { SessionEntity } from './aggregates/session.entity';
import { UserEntity } from './aggregates/user.entity';

import { AchievementEntity } from './models/achievement.entity';
import { BadgeEntity } from './models/badge.entity';
import { EffectEntity } from './models/effect.entity';
import { RoleEntity } from './models/role.entity';
import { SharedLinkEntity } from './models/shared-link.entity';
import { ThemeEntity } from './models/theme.entity';

export const themes: ThemeEntity[] = [
  { id: '1', name: 'Adventure', premium: false, roles: [] },
  { id: '2', name: 'Mystery', premium: true, roles: [] },
];

export const effects: EffectEntity[] = [
  { id: '1', name: 'Fire', premium: false },
  { id: '2', name: 'Ice', premium: true },
];

export const sharedLinks: SharedLinkEntity[] = [
  { id: '1', url: 'https://example.com/link1', isActive: true },
  { id: '2', url: 'https://example.com/link2', isActive: false },
];

export const roles: RoleEntity[] = [
  {
    id: '1',
    name: 'Warrior',
    theme: themes[0],
    attributes: ['Strength', 'Courage'],
  },
  {
    id: '2',
    name: 'Detective',
    theme: themes[1],
    attributes: ['Intelligence', 'Observation'],
  },
];

export const users: UserEntity[] = [
  {
    id: '1',
    name: 'Alice',
    points: 100,
    premiumStatus: true,
    profile: { bio: 'Loves adventure', interests: ['Hiking', 'Reading'] },
    rolePreferences: [{ role: roles[0], preference: RolePreferenceEnum.HIGH }],
    badges: [],
    achievements: [],
  },
  {
    id: '2',
    name: 'Bob',
    points: 50,
    premiumStatus: false,
    profile: { bio: 'Mystery lover', interests: ['Puzzles', 'Movies'] },
    rolePreferences: [{ role: roles[1], preference: RolePreferenceEnum.LOW }],
    badges: [],
    achievements: [],
  },
];

export const achievements: AchievementEntity[] = [
  {
    id: '1',
    achievementType: 'First Win',
    timestamp: new Date(),
    user: users[0],
  },
  {
    id: '2',
    achievementType: 'Top Scorer',
    timestamp: new Date(),
    user: users[1],
  },
];

export const badges: BadgeEntity[] = [
  { id: '1', badgeType: 'Gold', timestamp: new Date(), user: users[0] },
  { id: '2', badgeType: 'Silver', timestamp: new Date(), user: users[1] },
];

export const sessions: SessionEntity[] = [
  {
    id: '1',
    status: 'started',
    participants: [users[0], users[1]],
    sharedLink: sharedLinks[0],
    rolesAssigned: [roles[0]],
    theme: themes[0],
  },
];

export const points: PointEntity[] = [
  {
    id: '1',
    user: users[0],
    session: sessions[0],
    timestamp: new Date(),
    pointsEarned: 10,
    pointsSpent: 5,
    pointsBalance: 5,
  },
];

export const roleRecords: RoleRecordEntity[] = [
  {
    id: '1',
    user: users[0],
    role: roles[0],
    session: sessions[0],
    timestamp: new Date(),
  },
];
