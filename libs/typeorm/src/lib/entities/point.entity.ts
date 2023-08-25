import { Point } from '@role-land/domain';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { SessionEntity } from './session.entity';
import { UserEntity } from './user.entity';

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
