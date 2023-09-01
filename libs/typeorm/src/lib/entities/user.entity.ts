import { User } from '@role-land/domain';
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
import { AchievementEntity } from './achievement.entity';
import { BadgeEntity } from './badge.entity';
import { RolePreferenceEntity } from './role-preference.entity';
import { TeamMemberEntity } from './team-member.entity';
import { ProfileEmbeded } from './user.profile.embed';

// UserEntity: Central entity for user management. Includes fields like username, globalName, and premiumStatus.
@Entity('User')
export class UserEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements User
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

  @OneToMany(() => AchievementEntity, (achievement) => achievement.user)
  achievements: AchievementEntity[];

  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.user)
  teamMemberships: TeamMemberEntity[];

  // NOTE: optimistic concurrency control
  @VersionColumn({ default: 0 })
  version: number;
}
