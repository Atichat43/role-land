import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Achievement } from '../../core/models.types';
import { UserEntity } from '../aggregates/user.entity';
import { TimestampsEntityColumns } from '../_common.entity';

@Entity('Achievement')
export class AchievementEntity
  extends TimestampsEntityColumns
  implements Achievement
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  achievementType: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => UserEntity, (user) => user.achievements)
  user: UserEntity;
}
