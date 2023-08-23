import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Achievement } from '../../core/models.types';

@Entity('Achievement')
export class AchievementEntity implements Achievement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  achievementType: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => UserEntity, (user) => user.achievements)
  user: UserEntity;
}
