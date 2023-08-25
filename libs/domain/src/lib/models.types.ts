import { Timestamps } from './_base.types';

// NOTE: Core business models and interfaces.
export interface Achievement extends Timestamps {
  id: string;
  achievementType: string;
}

export interface Badge extends Timestamps {
  id: string;
  badgeType: string;
}

export interface Effect extends Timestamps {
  id: string;
  name: string;
  premium: boolean;
}

// Role can be created and updated by users.
export interface Role extends Timestamps {
  id: string;
  name: string;
  theme: Theme;
  attributes: string[];
}

// Themes can be created and updated by users.
export interface Theme extends Timestamps {
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
