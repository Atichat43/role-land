import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
  Index,
} from 'typeorm';
import { SharedLinkEntity } from '../models/shared-link.entity';
import { Session } from '../../core/aggregates.types';
import { UserEntity } from './user.entity';
import { RoleEntity } from '../models/role.entity';
import { ThemeEntity } from '../models/theme.entity';
import { BaseEntityWithSoftDelete } from '../_common.entity';

@Entity('Session')
@Index('session_status_index', ['status']) // NOTE: query sessions by status.
// NOTE: soft delete: analyzing past sessions (important interactions or events).
export class SessionEntity extends BaseEntityWithSoftDelete implements Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ['started', 'ended'] })
  status: 'started' | 'ended';

  // aggregates
  @ManyToMany(() => RoleEntity)
  @JoinTable()
  rolesAssigned: RoleEntity[];

  @ManyToMany(() => UserEntity)
  @JoinTable()
  participants: UserEntity[];

  // models
  @OneToOne(() => SharedLinkEntity)
  @JoinColumn()
  sharedLink: SharedLinkEntity;

  @OneToOne(() => ThemeEntity)
  @JoinColumn()
  theme: ThemeEntity;
}
