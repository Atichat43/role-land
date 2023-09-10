import { IUserAchievement } from '@role-land/domain';
import { IsUUID, Max, Min } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsEntityColumns } from './_base.entity';
import { AchievementEntity } from './achievement.entity';
import { UserEntity } from './user.entity';

export const UserAchievementEntityTableName = 'UserAchievement';

@Entity(UserAchievementEntityTableName)
export class UserAchievementEntity
  extends TimestampsEntityColumns
  implements IUserAchievement
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  @Min(1)
  milestoneCount: number;

  @Column('date')
  earnedDate: Date;

  @Column('int')
  @Min(1)
  @Max(12)
  earnedMonth: number;

  @Column('int')
  @Min(2023)
  earnedYear: number;

  @Column('int')
  count: number;

  @Column()
  @IsUUID()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.userAchievementProgresses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  @IsUUID()
  achievementId: string;

  @ManyToOne(
    () => AchievementEntity,
    (achievement) => achievement.userAchievementProgresses,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'achievementId' })
  achievement: AchievementEntity;
}
