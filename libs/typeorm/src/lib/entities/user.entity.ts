import { User } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, Length, ValidateNested } from 'class-validator';
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
import { ProfileEmbeded } from './user.profile.embed';
import { RolePreferenceEmbeded } from './user.role-preference.embed';

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

  @Column(() => RolePreferenceEmbeded, { array: true })
  rolePreferences: RolePreferenceEmbeded[];

  @OneToMany(() => BadgeEntity, (badge) => badge.user)
  badges: BadgeEntity[];

  @OneToMany(() => AchievementEntity, (achievement) => achievement.user)
  achievements: AchievementEntity[];

  // NOTE: optimistic concurrency control
  @VersionColumn({ default: 0 })
  version: number;
}
