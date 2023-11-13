import { Optional } from '@role-land/utility-types';

import { IRepoFindOpts } from '../../../../_shared/persistence/repo-opts.type';
import { UserAuth } from '../../entity';

export interface IUserAuthRepoPort {
  findUserAuth(by: {
    id?: string;
    providerUserId?: string;
    userId?: string;
    authProviderId?: string;
  }): Promise<Optional<UserAuth>>;

  countUserAuths(
    by: {
      providerUserId?: string;
      userId?: string;
      authProviderId?: string;
    },
    options?: IRepoFindOpts,
  ): Promise<number>;

  addUserAuth(userAuth: UserAuth): Promise<Pick<UserAuth, 'id'>>;
}
