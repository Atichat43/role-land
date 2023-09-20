import { isUndefined, Nullable } from '@role-land/utility-types';
import { compare, genSalt, hash } from 'bcrypt';
import {
  IsBoolean,
  IsInstance,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { v4 } from 'uuid';

import { Entity } from '../../../_shared/entity/entity';
import { ICreateUserPayload, IEditUserPayload, IUserRaw } from './type';
import { UserProfile } from './user-profile.value-object';

export class User extends Entity<string> implements IUserRaw {
  @IsString()
  @Length(1, 25)
  readonly username: string;

  @IsString()
  password: string;

  @IsString()
  @Length(1, 25)
  globalName: string;

  @IsBoolean()
  premiumStatus: boolean;

  @IsOptional()
  @IsUrl()
  avatar: Nullable<string>;

  @IsInstance(UserProfile)
  profile: UserProfile;

  constructor(payload: ICreateUserPayload) {
    super();
    this.id = payload.id ?? v4();

    this.username = payload.username;
    this.password = payload.password;

    this.globalName = payload.globalName ?? payload.username;
    this.premiumStatus = payload.premiumStatus ?? false;
    this.avatar = payload.avatar ?? null;
    this.profile = payload.profile ?? new UserProfile({});
  }

  public async hashPassword(): Promise<void> {
    // unique hashes even for the same password
    const salt: string = await genSalt();
    this.password = await hash(this.password, salt);

    await this.validate();
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.password);
  }

  public async edit(payload: IEditUserPayload) {
    if (!isUndefined(payload.avatar)) {
      this.avatar = payload.avatar;
    }
    if (!isUndefined(payload.globalName)) {
      this.globalName = payload.globalName;
    }
    if (!isUndefined(payload.premiumStatus)) {
      this.premiumStatus = payload.premiumStatus;
    }

    await this.validate();
  }

  public static async new(payload: ICreateUserPayload): Promise<User> {
    const user = new User(payload);
    await user.hashPassword();
    await user.validate();

    return user;
  }
}
