export interface Achievement {
  id: string;
  achievementType: string;
  timestamp: Date;
}

export interface Badge {
  id: string;
  badgeType: string;
  timestamp: Date;
}

export interface Effect {
  id: string;
  name: string;
  premium: boolean;
}

export interface Profile {
  bio: string;
  interests: string[];
  // other profile properties
}

export interface Role {
  id: string;
  name: string;
  theme: Theme;
  attributes: string[];
}

export interface RolePreference {
  role: Role;
  preference: 'high' | 'medium' | 'low';
}

export interface Theme {
  id: string;
  name: string;
  roles: Role[];
  premium: boolean;
}

export interface SharedLink {
  id: string;
  url: string;
  isActive: boolean;
}
