import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  VersionColumn,
} from 'typeorm';

import { ProfileEmbeded } from './user.profile.embed';
import { RolePreferenceEmbeded } from './user.role-preference.embed';

import { AchievementEntity } from '../models/achievement.entity';
import { BadgeEntity } from '../models/badge.entity';
import { User } from '../../core/aggregates.types';
import { BaseEntityWithSoftDelete } from '../_common.entity';

@Entity('User')
// @Index('email_index', ['email'])
// NOTE: soft delete: analyzing user trends and maintaining historical data.
export class UserEntity extends BaseEntityWithSoftDelete implements User {
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
