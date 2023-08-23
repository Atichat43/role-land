import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEntity } from '../models/role.entity';
import { SessionEntity } from './session.entity';
import { RoleRecord } from '../../core/aggregates.types';
import { BaseEntity } from '../_common.entity';

@Entity('RoleRecord')
export class RoleRecordEntity extends BaseEntity implements RoleRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  timestamp: Date;

  // aggregates
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => SessionEntity)
  session: SessionEntity;

  // models
  @ManyToOne(() => RoleEntity)
  role: RoleEntity;
}
