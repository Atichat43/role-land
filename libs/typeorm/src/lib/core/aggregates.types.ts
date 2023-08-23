import { Badge, Achievement, SharedLink, Theme, Role } from './models.types';
import { Profile, RolePreference } from './value-objects';

export interface User {
  id: string;
  name: string;
  points: number;
  premiumStatus: boolean;

  // model
  badges: Badge[];
  achievements: Achievement[];

  // value objects
  profile: Profile;
  rolePreferences: RolePreference[];
}

export interface Session {
  id: string;
  status: 'started' | 'ended';

  // aggregates
  rolesAssigned: Role[];
  participants: User[];

  // model
  sharedLink: SharedLink;
  theme: Theme;
}

export interface RoleRecord {
  id: string;
  timestamp: Date;

  // aggregates
  user: User;
  session: Session;

  // model
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