import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Code, Exception } from '@role-land/core';
import { isUndefined } from '@role-land/utility-types';
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt';

import { HttpAuthService } from '../../http.auth.service';
import {
  IHttpAuthJwtPayload,
  IHttpAuthValidatedUser,
} from '../../type/http.auth.type';
import {
  JwtEnvConfig,
  jwtEnvConfigTokenSymbol,
} from './http.auth.passport.jwt.env-config';

@Injectable()
export class HttpAuthJwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor(
    private authService: HttpAuthService,
    private configService: ConfigService,
  ) {
    const config = configService.getOrThrow<JwtEnvConfig>(
      jwtEnvConfigTokenSymbol.toString(),
    );

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.secret,
    });
  }

  public async validate(
    payload: IHttpAuthJwtPayload,
  ): Promise<IHttpAuthValidatedUser> {
    console.log('test');
    const user = await this.authService.getUser({ id: payload.id });

    if (isUndefined(user)) {
      throw Exception.new({ code: Code.UNAUTHORIZED_ERROR });
    }

    return { id: user.id, username: user.username, role: user.role };
  }
}
