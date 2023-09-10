import { IUserAchievementProgress } from '@role-land/domain';
import { IsUUID, Max, Min } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { AchievementEntity } from './achievement.entity';
import { UserEntity } from './user.entity';

export const UserAchievementProgressEntityTableName = 'UserAchievementProgress';

@Entity(UserAchievementProgressEntityTableName)
export class UserAchievementProgressEntity
  extends TimestampsEntityColumns
  implements IUserAchievementProgress
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Min(1)
  progressCount: number;

  @Column('date')
  lastUpdatedDate: Date;

  @Column('int')
  @Min(1)
  @Max(12)
  lastUpdatedMonth: number;

  @Column('int')
  @Min(2023)
  lastUpdatedYear: number;

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
