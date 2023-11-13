import { Nullable } from '@role-land/utility-types';

export interface ICreateUserAuthPort {
  providerUserId: string;

  userId: string;
  authProviderId: string;

  accessToken?: Nullable<string>;
  refreshToken?: Nullable<string>;
}
