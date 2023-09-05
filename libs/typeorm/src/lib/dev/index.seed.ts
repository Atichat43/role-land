import {
  ERolePreference,
  ESessionStatus,
  ETeamMemberMembershipState,
} from '@role-land/domain';
import { v4 as uuid } from 'uuid';

import { TeamEntity, TeamMemberEntity } from '../entities';
import { TimestampsAndSoftDeletionEntityColumns } from '../entities/_common.entity';
import { AchievementEntity } from '../entities/achievement.entity';
import { BadgeEntity } from '../entities/badge.entity';
import { EffectEntity } from '../entities/effect.entity';
import { PointEntity } from '../entities/point.entity';
import { RoleEntity } from '../entities/role.entity';
import { RolePreferenceEntity } from '../entities/role-preference.entity';
import { SessionEntity } from '../entities/session.entity';
import { SharedLinkEntity } from '../entities/shared-link.entity';
import { ThemeEntity } from '../entities/theme.entity';
import { UserEntity } from '../entities/user.entity';

export type OmitBaseEntityColumns<T> = Omit<
  T,
  keyof TimestampsAndSoftDeletionEntityColumns | 'version'
>;

// export const effects: OmitBaseEntityColumns<EffectEntity>[] = [
//   { id: uuid(), name: 'Fire', premium: false },
//   { id: uuid(), name: 'Ice', premium: true },
// ];

// export const sharedLinks: OmitBaseEntityColumns<SharedLinkEntity>[] = [
//   { id: uuid(), url: 'https://example.com/link1', isActive: true },
//   { id: uuid(), url: 'https://example.com/link2', isActive: false },
// ];

// export const users: OmitBaseEntityColumns<UserEntity>[] = [
//   {
//     id: uuid(),
//     globalName: 'Alice',
//     username: 'alice',
//     avatar: 'https://example.com/avatar1',
//     premiumStatus: true,
//     profile: { bio: 'Loves adventure', interests: ['Hiking', 'Reading'] },
//     rolePreferences: [],
//     badges: [],
//     achievements: [],
//     teamMemberships: [],
//   },
//   {
//     id: uuid(),
//     globalName: 'Bob',
//     username: 'bob',
//     avatar: 'https://example.com/avatar2',
//     premiumStatus: false,
//     profile: { bio: 'Mystery lover', interests: ['Puzzles', 'Movies'] },
//     rolePreferences: [],
//     badges: [],
//     achievements: [],
//     teamMemberships: [],
//   },
// ];

// export const teams: OmitBaseEntityColumns<TeamEntity>[] = [
//   {
//     id: uuid(),
//     name: 'Team 1',
//     icon: 'https://example.com/icon1',
//     owner: users[0] as UserEntity,
//     members: [],
//   },
//   {
//     id: uuid(),
//     name: 'Team 2',
//     icon: 'https://example.com/icon2',
//     owner: users[1] as UserEntity,
//     members: [],
//   },
// ];

// export const teamMembers: OmitBaseEntityColumns<TeamMemberEntity>[] = [
//   {
//     id: uuid(),
//     teamMemberMembershipState: ETeamMemberMembershipState.INVITED,
//     permissions: ['READ', 'WRITE'],
//     user: users[0] as UserEntity,
//     team: teams[0] as TeamEntity,
//   },
//   {
//     id: uuid(),
//     teamMemberMembershipState: ETeamMemberMembershipState.ACCEPTED,
//     permissions: ['READ'],
//     user: users[0] as UserEntity,
//     team: teams[1] as TeamEntity,
//   },
//   {
//     id: uuid(),
//     teamMemberMembershipState: ETeamMemberMembershipState.INVITED,
//     permissions: ['READ'],
//     user: users[1] as UserEntity,
//     team: teams[1] as TeamEntity,
//   },
// ];

// export const rolePreferences: OmitBaseEntityColumns<RolePreferenceEntity>[] = [
//   {
//     id: uuid(),
//     customImage: null,
//     preference: ERolePreference.LOW,
//     role: roles[0] as RoleEntity,
//     user: users[0] as UserEntity,
//   },
// ];

// export const achievements: OmitBaseEntityColumns<AchievementEntity>[] = [
//   {
//     id: uuid(),
//     achievementType: 'First Win',
//     user: users[0] as UserEntity,
//   },
//   {
//     id: uuid(),
//     achievementType: 'Top Scorer',
//     user: users[1] as UserEntity,
//   },
// ];

// export const badges: OmitBaseEntityColumns<BadgeEntity>[] = [
//   {
//     id: uuid(),
//     badgeType: 'Gold',
//     user: users[0] as UserEntity,
//   },
//   {
//     id: uuid(),
//     badgeType: 'Silver',
//     user: users[1] as UserEntity,
//   },
// ];

// export const sessions: OmitBaseEntityColumns<SessionEntity>[] = [
//   {
//     id: uuid(),
//     status: ESessionStatus.STARTED,
//     participants: [users[0], users[1]] as UserEntity[],
//     sharedLink: sharedLinks[0] as SharedLinkEntity,
//     rolesAssigned: [roles[0]] as RoleEntity[],
//     theme: themes[0] as ThemeEntity,
//   },
// ];

// export const points: Omit<
//   OmitBaseEntityColumns<PointEntity>,
//   'calculatePointsBalance'
// >[] = [
//   {
//     id: uuid(),
//     user: users[0] as UserEntity,
//     session: sessions[0] as SessionEntity,
//     pointsEarned: 10,
//     pointsSpent: 5,
//     pointsBalance: 5,
//   },
// ];
