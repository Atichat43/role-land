import { OmitBaseFields } from '../../../../_shared/types.helper';

// --- Auth Provider Interface ---
/**
 * @desc Holds the auth-provider-related domain information.
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - clientId: String, non-empty
 * - callbackUrl: String, non-empty
 */
export interface IAuthProvider {
  id: string;
  name: string;
  clientId: string;
  callbackUrl: string;
}

export type IAuthProviderRaw = OmitBaseFields<IAuthProvider>;
export type IAuthProviderMock = Readonly<IAuthProviderRaw>;
