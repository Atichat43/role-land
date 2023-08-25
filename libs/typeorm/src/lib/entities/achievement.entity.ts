import { Achievement } from '@role-land/domain';
import { Column, Entity, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { UserEntity } from './user.entity';

@Entity('Achievement')
export class AchievementEntity
  extends TimestampsEntityColumns
  implements Achievement
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  achievementType: string;

  @ManyToOne(() => UserEntity, (user) => user.achievements)
  user: UserEntity;
}
