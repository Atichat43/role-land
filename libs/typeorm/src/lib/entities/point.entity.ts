import { IPoint } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsInt, Min, ValidateIf, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { SessionEntity } from './session.entity';
import { UserEntity } from './user.entity';

// PointEntity: Manages points earned, spent, and balance within a session.
@Entity('Point')
export class PointEntity extends TimestampsEntityColumns implements IPoint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 0 })
  @IsInt()
  @Min(0)
  pointsEarned: number;

  @Column({ default: 0 })
  @IsInt()
  @Min(0)
  pointsSpent: number;

  @Column({ default: 0 })
  @IsInt()
  @Min(0)
  @ValidateIf((o) => o.pointsBalance === o.pointsEarned - o.pointsSpent)
  pointsBalance: number;

  // aggregates
  @ManyToOne(() => UserEntity)
  @ValidateNested()
  @Type(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => SessionEntity)
  @ValidateNested()
  @Type(() => UserEntity)
  session: SessionEntity;
}
