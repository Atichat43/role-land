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
import { Session, SessionStatusEnum } from '../../core/aggregates.types';
import { UserEntity } from './user.entity';
import { RoleEntity } from '../models/role.entity';
import { ThemeEntity } from '../models/theme.entity';
import { TimestampsAndSoftDeletionEntityColumns } from '../_common.entity';

@Entity('Session')
@Index('session_status_index', ['status']) // NOTE: query sessions by status.
// NOTE: soft delete: analyzing past sessions (important interactions or events).
export class SessionEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements Session
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', {
    enum: SessionStatusEnum,
    default: SessionStatusEnum.PENDING,
  })
  status: SessionStatusEnum;

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
