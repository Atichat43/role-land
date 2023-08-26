import { User } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsBoolean, Length, ValidateNested } from 'class-validator';
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
import { ProfileEmbeded } from './user.profile.embed';

@Entity('User')
// @Index('email_index', ['email'])
// NOTE: soft delete: analyzing user trends and maintaining historical data.
export class UserEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements User
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column({ default: false })
  @IsBoolean()
  premiumStatus: boolean;

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

  // NOTE: optimistic concurrency control
  @VersionColumn({ default: 0 })
  version: number;
}
