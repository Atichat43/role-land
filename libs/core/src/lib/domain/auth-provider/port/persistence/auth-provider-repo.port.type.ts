import { Optional } from '@role-land/utility-types';

import { AuthProvider } from '../../entity';

export interface IAuthProviderRepoPort {
  findAuthProvider(by: {
    id?: string;
    name?: string;
  }): Promise<Optional<AuthProvider>>;

  addAuthProvider(provider: AuthProvider): Promise<Pick<AuthProvider, 'id'>>;
}
