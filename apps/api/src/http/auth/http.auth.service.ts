import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDiToken, UserRepoPort } from '@role-land/domain';
import { isUndefined, Nullable, Optional } from '@role-land/utility-types';

import {
  IHttpAuthJwtPayload,
  IHttpAuthLoggedInUser,
  IHttpAuthValidatedUser,
} from './type/http.auth.type';

@Injectable()
export class HttpAuthService {
  constructor(
    @Inject(UserDiToken.UserRepo)
    private userRepo: UserRepoPort,
    private jwtService: JwtService,
  ) {}

  public async validateUser(
    username: string,
    password: string,
  ): Promise<Nullable<IHttpAuthValidatedUser>> {
    const user: Optional<User> = await this.userRepo.findUser({ username });

    if (isUndefined(user)) return null;

    const isPasswordValid = await user.comparePassword(password);
    if (isPasswordValid) {
      return { id: user.id, username: user.username };
    }

    return null;
  }

  public login(user: IHttpAuthValidatedUser): IHttpAuthLoggedInUser {
    const payload: IHttpAuthJwtPayload = {
      id: user.id,
      username: user.username,
      sub: user.id,
    };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }

  public async getUser(by: { id: string }): Promise<Optional<User>> {
    return this.userRepo.findUser(by);
  }
}
