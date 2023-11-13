import { Optional } from '@role-land/utility-types';

import { IRepoFindOpts } from '../../../../_shared/persistence/repo-opts.type';
import { User } from '../../entity/user.entity';

export interface IUserRepoPort {
  findUser(
    by: { id?: string; username?: string },
    options?: IRepoFindOpts,
  ): Promise<Optional<User>>;

  countUsers(
    by: { username?: string },
    options?: IRepoFindOpts,
  ): Promise<number>;

  addUser(user: User): Promise<Pick<User, 'id'>>;
}