import { v4 as uuid } from 'uuid';

import { RolePreferenceEnum } from '../core/value-objects.types';

import { TimestampsAndSoftDeletionEntityColumns } from './_common.entity';

import { PointEntity } from './aggregates/point.entity';
import { SessionEntity } from './aggregates/session.entity';
import { UserEntity } from './aggregates/user.entity';

import { AchievementEntity } from './models/achievement.entity';
import { BadgeEntity } from './models/badge.entity';
import { EffectEntity } from './models/effect.entity';
import { RoleEntity } from './models/role.entity';
import { SharedLinkEntity } from './models/shared-link.entity';
import { ThemeEntity } from './models/theme.entity';
import { SessionStatusEnum } from '../core/aggregates.types';

type OmitBaseEntityColumns<T> = Omit<
  T,
  keyof TimestampsAndSoftDeletionEntityColumns | 'version'
>;

export const themes: OmitBaseEntityColumns<ThemeEntity>[] = [
  { id: uuid(), name: 'Adventure', premium: false, roles: [] },
  { id: uuid(), name: 'Mystery', premium: true, roles: [] },
];

export const effects: OmitBaseEntityColumns<EffectEntity>[] = [
  { id: uuid(), name: 'Fire', premium: false },
  { id: uuid(), name: 'Ice', premium: true },
];

export const sharedLinks: OmitBaseEntityColumns<SharedLinkEntity>[] = [
  { id: uuid(), url: 'https://example.com/link1', isActive: true },
  { id: uuid(), url: 'https://example.com/link2', isActive: false },
];

export const roles: OmitBaseEntityColumns<RoleEntity>[] = [
  {
    id: uuid(),
    name: 'Warrior',
    theme: themes[0] as ThemeEntity,
    attributes: ['Strength', 'Courage'],
  },
  {
    id: uuid(),
    name: 'Detective',
    theme: themes[1] as ThemeEntity,
    attributes: ['Intelligence', 'Observation'],
  },
];

export const users: OmitBaseEntityColumns<UserEntity>[] = [
  {
    id: uuid(),
    name: 'Alice',
    points: 100,
    premiumStatus: true,
    profile: { bio: 'Loves adventure', interests: ['Hiking', 'Reading'] },
    rolePreferences: [
      { role: roles[0] as RoleEntity, preference: RolePreferenceEnum.HIGH },
    ],
    badges: [],
    achievements: [],
  },
  {
    id: uuid(),
    name: 'Bob',
    points: 50,
    premiumStatus: false,
    profile: { bio: 'Mystery lover', interests: ['Puzzles', 'Movies'] },
    rolePreferences: [
      { role: roles[1] as RoleEntity, preference: RolePreferenceEnum.LOW },
    ],
    badges: [],
    achievements: [],
  },
];

export const achievements: OmitBaseEntityColumns<AchievementEntity>[] = [
  {
    id: uuid(),
    achievementType: 'First Win',
    timestamp: new Date(),
    user: users[0] as UserEntity,
  },
  {
    id: uuid(),
    achievementType: 'Top Scorer',
    timestamp: new Date(),
    user: users[1] as UserEntity,
  },
];

export const badges: OmitBaseEntityColumns<BadgeEntity>[] = [
  {
    id: uuid(),
    badgeType: 'Gold',
    timestamp: new Date(),
    user: users[0] as UserEntity,
  },
  {
    id: uuid(),
    badgeType: 'Silver',
    timestamp: new Date(),
    user: users[1] as UserEntity,
  },
];

export const sessions: OmitBaseEntityColumns<SessionEntity>[] = [
  {
    id: uuid(),
    status: SessionStatusEnum.STARTED,
    participants: [users[0], users[1]] as UserEntity[],
    sharedLink: sharedLinks[0] as SharedLinkEntity,
    rolesAssigned: [roles[0]] as RoleEntity[],
    theme: themes[0] as ThemeEntity,
  },
];

export const points: OmitBaseEntityColumns<PointEntity>[] = [
  {
    id: uuid(),
    user: users[0] as UserEntity,
    session: sessions[0] as SessionEntity,
    timestamp: new Date(),
    pointsEarned: 10,
    pointsSpent: 5,
    pointsBalance: 5,
  },
];
