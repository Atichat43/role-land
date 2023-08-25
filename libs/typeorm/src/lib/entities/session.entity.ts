import { Session, SessionStatusEnum } from '@role-land/domain';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_common.entity';
import { RoleEntity } from './role.entity';
import { SharedLinkEntity } from './shared-link.entity';
import { ThemeEntity } from './theme.entity';
import { UserEntity } from './user.entity';

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
