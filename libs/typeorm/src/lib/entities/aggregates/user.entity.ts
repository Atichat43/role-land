import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { ProfileEmbeded } from './user.profile.embed';
import { RolePreferenceEmbeded } from './user.role-preference.embed';

import { AchievementEntity } from '../models/achievement.entity';
import { BadgeEntity } from '../models/badge.entity';
import { User } from '../../core/aggregates.types';

@Entity('User')
export class UserEntity implements User {
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
}
