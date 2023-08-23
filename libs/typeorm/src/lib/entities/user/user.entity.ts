import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BadgeEntity } from '../badge/badge.entity';
import { AchievementEntity } from '../achievement/achievement.entity';
import { ProfileEmbeded } from './profile.embed';
import { RolePreferenceEmbeded } from './role-preference.embed';

@Entity()
export class UserEntity {
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
