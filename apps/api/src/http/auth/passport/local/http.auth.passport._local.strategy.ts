import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Code, Exception } from '@role-land/core';
import { isNull, Nullable } from '@role-land/utility-types';
import { Strategy as PassportLocalStrategy } from 'passport-local';

import { HttpAuthService } from '../../http.auth.service';
import { IHttpAuthValidatedUser } from '../../type';

// NOTE: to verify using username and password
@Injectable()
export class HttpAuthLocalStrategy extends PassportStrategy(
  PassportLocalStrategy,
) {
  constructor(private authService: HttpAuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  public async validate(
    username: string,
    password: string,
  ): Promise<IHttpAuthValidatedUser> {
    const user: Nullable<IHttpAuthValidatedUser> =
      await this.authService.validateUser(username, password);

    if (isNull(user)) {
      throw Exception.new({ code: Code.WRONG_CREDENTIALS_ERROR });
    }

    return user;
  }
}
