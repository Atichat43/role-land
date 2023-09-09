import { IUserAchievement } from '@role-land/domain';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { AchievementEntity } from './achievement.entity';
import { UserEntity } from './user.entity'; // Assuming you have a User entity defined elsewhere

export const UserAchievementEntityTableName = 'UserAchievement';

@Entity(UserAchievementEntityTableName)
export class UserAchievementEntity
  extends TimestampsEntityColumns
  implements IUserAchievement
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  achievementId: string;

  @Column('int')
  milestoneCount: number;

  @Column('date')
  earnedDate: Date;

  @Column('int')
  earnedMonth: number;

  @Column('int')
  earnedYear: number;

  @Column('int')
  count: number;

  @ManyToOne(() => UserEntity, (user) => user.userAchievements)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToOne(() => AchievementEntity, (achievement) => achievement.id)
  @JoinColumn({ name: 'achievementId' })
  achievement: AchievementEntity;
}
