import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ErrorCode, Exception } from '@role-land/domain';
import { isNull, Nullable } from '@role-land/utility-types';
import { Strategy as PassportLocalStrategy } from 'passport-local';

import { HttpAuthService } from '../../http.auth.service';
import { IHttpAuthValidatedUser } from '../../type/http.auth.type';

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
      throw Exception.new({ code: ErrorCode.WRONG_CREDENTIALS_ERROR });
    }

    return user;
  }
}
