import { OmitBaseFields } from '../../../../_shared/types.helper';
import { ISoftDeletionFields, ITimestampFields } from '../../../_base.types';
import { IAuthProvider } from '../../../auth-provider';
import { IUser } from '../../../user/entity';

// --- Auth Provider Interface ---
/**
 * @desc Holds the auth-provider-related domain information.
 * @attributes
 * - id: UUID
 * - providerUserId: string, the user id from the provider
 * - accessToken: string, the access token from the provider
 * - refreshToken: string, the refresh token from the provider
 *
 */
export interface IUserAuth extends ITimestampFields, ISoftDeletionFields {
  id: string;
  providerUserId: string;

  accessToken: string | null;
  refreshToken: string | null;
}

export type IUserAuthWithRelations = IUserAuth & {
  userId: string;
  user: IUser;
  authProviderId: string;
  authProvider: IAuthProvider;
};

export type IUserAuthRaw = OmitBaseFields<IUserAuth>;
export type IUserAuthMock = Readonly<IUserAuth>;
