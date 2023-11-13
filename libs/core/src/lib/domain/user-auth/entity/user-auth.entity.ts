import { Nullable } from '@role-land/utility-types';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { v4 } from 'uuid';

import { Entity } from '../../../_shared/entity';
import { ICreateUserAuthPayload, IUserAuthRaw } from './type';

export class UserAuth extends Entity<string> implements IUserAuthRaw {
  @IsString()
  providerUserId: string;

  @IsOptional()
  @IsString()
  accessToken: Nullable<string>;

  @IsOptional()
  @IsString()
  refreshToken: Nullable<string>;

  @IsUUID()
  userId: string;

  @IsUUID()
  authProviderId: string;

  constructor(payload: ICreateUserAuthPayload) {
    super();
    this.id = payload.id ?? v4();

    this.providerUserId = payload.providerUserId;
    this.accessToken = payload.accessToken ?? null;
    this.refreshToken = payload.refreshToken ?? null;

    this.userId = payload.userId;
    this.authProviderId = payload.authProviderId;
  }

  public static async new(payload: ICreateUserAuthPayload): Promise<UserAuth> {
    const authProvider = new UserAuth(payload);
    await authProvider.validate();

    return authProvider;
  }
}
