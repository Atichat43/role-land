import { Badge, Achievement, SharedLink, Theme, Role } from './models.types';
import { Profile, RolePreference } from './value-objects.types';
import { SoftDeletion, Timestamps } from './base.types';

export interface User extends Timestamps, SoftDeletion {
  id: string;
  name: string;
  points: number;
  premiumStatus: boolean;

  // models
  badges: Badge[];
  achievements: Achievement[];

  // value objects
  profile: Profile;
  rolePreferences: RolePreference[];
}

export enum SessionStatusEnum {
  PENDING = 'pending',
  STARTED = 'started',
  ENDED = 'ended',
}

export interface Session extends Timestamps {
  id: string;
  status: SessionStatusEnum;

  // aggregates
  rolesAssigned: Role[];
  participants: User[];

  // models
  sharedLink: SharedLink;
  theme: Theme;
}

export interface Point extends Timestamps {
  id: string;
  pointsEarned: number;
  pointsSpent: number;
  pointsBalance: number;

  // aggregates
  user: User;
  session: Session;
}
