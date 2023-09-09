import { IUser } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsBoolean, IsUrl, Length, ValidateNested } from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_common.entity';
import { BadgeEntity } from './badge.entity';
import { RolePreferenceEntity } from './role-preference.entity';
import { TeamMemberEntity } from './team-member.entity';
import { ProfileEmbeded } from './user.profile.embed';
import { UserAchievementEntity } from './user-achievement.entity';

export const UserEntityTableName = 'User';

// UserEntity: Central entity for user management. Includes fields like username, globalName, and premiumStatus.
@Entity(UserEntityTableName)
export class UserEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements IUser
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  username: string;

  @Column()
  @Length(1, 25)
  globalName: string;

  @Column({ default: false })
  @IsBoolean()
  premiumStatus: boolean;

  @Column({ nullable: true })
  @IsUrl()
  avatar: string | null;

  @Column(() => ProfileEmbeded)
  @ValidateNested()
  @Type(() => ProfileEmbeded)
  profile: ProfileEmbeded;

  @OneToMany(
    () => RolePreferenceEntity,
    (rolePreference) => rolePreference.user,
  )
  rolePreferences: RolePreferenceEntity[];

  @OneToMany(() => BadgeEntity, (badge) => badge.user)
  badges: BadgeEntity[];

  @OneToMany(
    () => UserAchievementEntity,
    (userAchievement) => userAchievement.user,
  )
  userAchievements: UserAchievementEntity[];

  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.user)
  teamMemberships: TeamMemberEntity[];

  // NOTE: optimistic concurrency control
  @VersionColumn({ default: 0 })
  version: number;
}
