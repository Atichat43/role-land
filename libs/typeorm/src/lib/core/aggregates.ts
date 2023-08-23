import {
  Profile,
  RolePreference,
  Badge,
  Achievement,
  SharedLink,
  Theme,
  Effect,
  Role,
} from './models';

export interface UserAggregate {
  id: string;
  name: string;
  profile: Profile;
  rolePreferences: RolePreference[];
  points: number;
  badges: Badge[];
  achievements: Achievement[];
  premiumStatus: boolean;
}

export interface SessionAggregate {
  id: string;
  status: 'started' | 'ended';
  participants: UserAggregate[];
  sharedLink: SharedLink;
  rolesAssigned: Role[];
  theme: Theme;
  effects: Effect[];
}

export interface RoleRecordAggregate {
  id: string;
  user: UserAggregate;
  role: Role;
  session: SessionAggregate;
  timestamp: Date;
}

export interface PointAggregate {
  id: string;
  user: UserAggregate;
  session: SessionAggregate;
  timestamp: Date;
  pointsEarned: number;
}

export interface SponsorshipAggregate {
  id: string;
  business: string;
  details: string;
}
