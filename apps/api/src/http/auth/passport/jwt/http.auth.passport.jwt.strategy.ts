import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Code, Exception } from '@role-land/core';
import { isUndefined } from '@role-land/utility-types';
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt';

import { HttpAuthService } from '../../http.auth.service';
import {
  IHttpAuthJwtPayload,
  IHttpAuthValidatedUser,
} from '../../type/http.auth.type';
// import { jwtConstants } from './auth.const';

@Injectable()
export class HttpAuthJwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor(private authService: HttpAuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: jwtConstants.secret,
      secretOrKey: 'temp',
      // passReqToCallback: true,
    });
  }

  public async validate(
    payload: IHttpAuthJwtPayload,
  ): Promise<IHttpAuthValidatedUser> {
    const user = await this.authService.getUser({ id: payload.id });

    if (isUndefined(user)) {
      throw Exception.new({ code: Code.UNAUTHORIZED_ERROR });
    }

    return { id: user.id, username: user.username };
  }
}
