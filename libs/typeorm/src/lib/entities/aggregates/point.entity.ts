import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UserEntity } from './user.entity';
import { SessionEntity } from './session.entity';
import { Point } from '../../core/aggregates.types';
import { BaseEntity } from '../_common.entity';

@Entity('Point')
export class PointEntity extends BaseEntity implements Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  timestamp: Date;

  @Column()
  pointsEarned: number;

  @Column()
  pointsSpent: number;

  @Column()
  pointsBalance: number;

  // aggregates
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => SessionEntity)
  session: SessionEntity;
}
