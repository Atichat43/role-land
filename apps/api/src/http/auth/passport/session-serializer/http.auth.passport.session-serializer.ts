import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '@role-land/core';

import { HttpAuthService } from '../../http.auth.service';
import { IDone, IHttpAuthValidatedUser } from '../../type';

@Injectable()
export class HttpAuthSessionSerializer extends PassportSerializer {
  constructor(private authService: HttpAuthService) {
    super();
  }

  serializeUser(userSession: IHttpAuthValidatedUser, done: IDone) {
    console.log('serializeUser user session', userSession);
    done(null, userSession);
  }

  async deserializeUser(userSession: IHttpAuthValidatedUser, done: IDone) {
    const user: User = await this.authService.getUser({ id: userSession.id });

    console.log('deserializeUser user', user);
    return user ? done(null, user) : done(null, null);
  }
}
