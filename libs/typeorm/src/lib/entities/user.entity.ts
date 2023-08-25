import { User } from '@role-land/domain';
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
  name: string;

  @Column()
  points: number;

  @Column()
  premiumStatus: boolean;

  @Column(() => ProfileEmbeded)
  profile: ProfileEmbeded;

  @Column(() => RolePreferenceEmbeded, { array: true })
  rolePreferences: RolePreferenceEmbeded[];

  @OneToMany(() => BadgeEntity, (badge) => badge.user)
  badges: BadgeEntity[];

  @OneToMany(() => AchievementEntity, (achievement) => achievement.user)
  achievements: AchievementEntity[];

  @VersionColumn({ default: 0 })
  version: number;
}
