import { UserProfile } from '../user-profile.value-object';
import { EUserRole } from './user.enum';

export interface ICreateUserPayload {
  id?: string;

  username: string;
  password: string;

  role?: EUserRole;
  globalName?: string;
  premiumStatus?: boolean;
  avatar?: string;

  profile?: UserProfile;
}
