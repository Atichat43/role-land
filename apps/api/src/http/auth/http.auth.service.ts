import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepoPort, User, UserDiToken } from '@role-land/core';
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
    private userRepo: IUserRepoPort,
    private jwtService: JwtService,
  ) {}

  public async validateUser(
    username: string,
    password: string,
  ): Promise<Nullable<IHttpAuthValidatedUser>> {
    const user: Optional<User> = await this.userRepo.findUser({ username });

    if (isUndefined(user)) return null;

    // TODO: uncomment
    // const isPasswordValid = await user.comparePassword(password);
    const isPasswordValid = true;
    if (isPasswordValid) {
      return { id: user.id, username: user.username, role: user.role };
    }

    return null;
  }

  // current version passport strategies depend on jwtService
  // TODO: recheck might need to move to passport/jwt to support multiple strategies (e.g. local, google, facebook, etc.)
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
