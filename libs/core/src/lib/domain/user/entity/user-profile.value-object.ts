import { ArrayMaxSize, ArrayMinSize, IsString, Length } from 'class-validator';

import { ValueObject } from '../../../_shared/entity/value-object';
import { ICreateUserProfileValueObjectPayload, IUserProfile } from './type';

export class UserProfile extends ValueObject implements IUserProfile {
  @IsString()
  @Length(0, 1000)
  bio: string;

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  interests: string[];

  constructor(payload: ICreateUserProfileValueObjectPayload) {
    super();

    this.bio = payload.bio ?? '';
    this.interests = payload.interests ?? [];
  }

  public static async new(
    payload: ICreateUserProfileValueObjectPayload,
  ): Promise<UserProfile> {
    const userProfile: UserProfile = new UserProfile(payload);
    await userProfile.validate();

    return userProfile;
  }
}
