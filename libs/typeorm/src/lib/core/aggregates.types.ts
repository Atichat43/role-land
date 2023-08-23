import { Badge, Achievement, SharedLink, Theme, Role } from './models.types';
import { Profile, RolePreference } from './value-objects';

export interface User {
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

export interface Session {
  id: string;
  status: SessionStatusEnum;

  // aggregates
  rolesAssigned: Role[];
  participants: User[];

  // models
  sharedLink: SharedLink;
  theme: Theme;
}

export interface RoleRecord {
  id: string;
  timestamp: Date;

  // aggregates
  user: User;
  session: Session;

  // models
  role: Role;
}

export interface Point {
  id: string;
  timestamp: Date;
  pointsEarned: number;
  pointsSpent: number;
  pointsBalance: number;

  // aggregates
  user: User;
  session: Session;
}
