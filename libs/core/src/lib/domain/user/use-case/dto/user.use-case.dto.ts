import { Exclude, Expose, plainToClass } from 'class-transformer';

import { User } from '../../entity';

// TODO:
@Exclude()
export class UserUseCaseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  globalName: string;

  public static newFromUser(user: User): UserUseCaseDto {
    return plainToClass(UserUseCaseDto, user);
  }
}
