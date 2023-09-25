import { UserProfile } from '../user-profile.value-object';

export interface ICreateUserPayload {
  id?: string;

  username: string;
  password: string;

  globalName?: string;
  premiumStatus?: boolean;
  avatar?: string;

  profile?: UserProfile;
}
