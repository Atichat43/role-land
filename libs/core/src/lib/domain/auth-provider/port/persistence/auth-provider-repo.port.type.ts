import { Optional } from '@role-land/utility-types';

import { IRepoFindOpts } from '../../../../_shared/persistence/repo-opts.type';
import { AuthProvider } from '../../entity';

export interface IAuthProviderRepoPort {
  findAuthProvider(by: {
    id?: string;
    name?: string;
  }): Promise<Optional<AuthProvider>>;

  countAuthProviders(
    by: { name?: string },
    options?: IRepoFindOpts,
  ): Promise<number>;

  addAuthProvider(provider: AuthProvider): Promise<Pick<AuthProvider, 'id'>>;
}
