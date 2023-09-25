import { User } from '@role-land/core';
import { Request } from 'express';

export type IHttpAuthValidatedUser = Pick<User, 'id' | 'username'>;

export type IHttpAuthLoggedInUser = Pick<User, 'id'> & {
  access_token: string;
};

export type IHttpAuthJwtPayload = Pick<User, 'id' | 'username'> & {
  sub: User['id'];
};

// controller
export type IHttpAuthRequestWithUser = Request & {
  user: IHttpAuthValidatedUser;
};
