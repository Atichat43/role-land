import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UserEntity } from './user.entity';
import { SessionEntity } from './session.entity';
import { Point } from '../../core-domain/aggregates.types';
import { TimestampsEntityColumns } from '../_common.entity';

@Entity('Point')
export class PointEntity extends TimestampsEntityColumns implements Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
