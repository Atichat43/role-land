import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AuthProvider,
  AuthProviderDiToken,
  IUserAuthRepoPort,
  IUserRepoPort,
  User,
  UserAuth,
  UserAuthDiToken,
  UserDiToken,
} from '@role-land/core';
import { isUndefined, Nullable, Optional } from '@role-land/utility-types';
import { Profile } from 'passport-discord';

import {
  IHttpAuthJwtPayload,
  IHttpAuthLoggedInUser,
  IHttpAuthValidatedUser,
} from './type';

@Injectable()
export class HttpAuthService {
  constructor(
    @Inject(UserDiToken.UserRepo)
    private userRepo: IUserRepoPort,
    @Inject(UserAuthDiToken.UserAuthRepo)
    private userAuthRepo: IUserAuthRepoPort,
    @Inject(AuthProviderDiToken.AuthProviderRepo)
    private authProviderRepo: AuthProvider,
    private jwtService: JwtService,
  ) {}

  // TODO: Profile
  public async validateDiscordUser(
    profile: Profile,
    tokens: { accessToken: string; refreshToken: string },
  ): Promise<Nullable<IHttpAuthValidatedUser>> {
    // discord auth provider
    // 90e15c93-95b1-4b9c-9c9a-09aececef06d
    const userAuth: Optional<UserAuth> = await this.userAuthRepo.findUserAuth({
      authProviderId: '90e15c93-95b1-4b9c-9c9a-09aececef06d',
      providerUserId: profile.username,
    });

    if (isUndefined(userAuth)) return null;

    const user: Optional<User> = await this.userRepo.findUser({
      id: userAuth.userId,
    });

    return { id: user.id, username: user.username, role: user.role };
  }

  public async validateUser(
    username: string,
    password: string,
  ): Promise<Nullable<IHttpAuthValidatedUser>> {
    const user: Optional<User> = await this.userRepo.findUser({ username });

    if (isUndefined(user)) return null;

    const isPasswordValid = await user.comparePassword(password);
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
