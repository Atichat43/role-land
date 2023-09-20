import { IRepoFindOpts } from '../../../../_shared/persistence/repo-opts.type';
import { User } from '../../entity/user.entity';

export interface UserRepoPort {
  findUser(
    by: { id?: string; username?: string },
    options?: IRepoFindOpts,
  ): Promise<User>;
}
