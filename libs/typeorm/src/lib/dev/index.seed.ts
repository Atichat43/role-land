import { RolePreferenceEnum, SessionStatusEnum } from '@role-land/domain';
import { v4 as uuid } from 'uuid';

import { TimestampsAndSoftDeletionEntityColumns } from '../entities/_common.entity';
import { AchievementEntity } from '../entities/achievement.entity';
import { BadgeEntity } from '../entities/badge.entity';
import { EffectEntity } from '../entities/effect.entity';
import { PointEntity } from '../entities/point.entity';
import { RoleEntity } from '../entities/role.entity';
import { SessionEntity } from '../entities/session.entity';
import { SharedLinkEntity } from '../entities/shared-link.entity';
import { ThemeEntity } from '../entities/theme.entity';
import { UserEntity } from '../entities/user.entity';

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
    user: users[0] as UserEntity,
  },
  {
    id: uuid(),
    achievementType: 'Top Scorer',
    user: users[1] as UserEntity,
  },
];

export const badges: OmitBaseEntityColumns<BadgeEntity>[] = [
  {
    id: uuid(),
    badgeType: 'Gold',
    user: users[0] as UserEntity,
  },
  {
    id: uuid(),
    badgeType: 'Silver',
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
    pointsEarned: 10,
    pointsSpent: 5,
    pointsBalance: 5,
  },
];
