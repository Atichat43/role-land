import { Exclude, Expose, plainToClass } from 'class-transformer';

import { UserAuth } from '../../entity';

@Exclude()
export class UserAuthUseCaseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  accessToken: string;

  public static newFromUserAuth(userAuth: UserAuth): UserAuthUseCaseDto {
    return plainToClass(UserAuthUseCaseDto, userAuth);
  }
}
