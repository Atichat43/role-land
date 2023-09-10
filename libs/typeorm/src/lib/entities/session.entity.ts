import { ESessionStatus, ISession } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_common.entity';
import { RoleEntity } from './role.entity';
import { SharedLinkEntity } from './shared-link.entity';
import { ThemeEntity } from './theme.entity';
import { UserEntity } from './user.entity';

export const SessionEntityTableName = 'Session';
export const Session_Participants__UserTableName = 'Session_Participants__User';
export const Session_RolesAvailable__RoleTableName =
  'Session_RolesAvailable__Role';

// SessionEntity: Manages the session status, shared links, and participants.
@Entity(SessionEntityTableName)
@Index('session_status_index', ['status'])
export class SessionEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements ISession
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', {
    enum: ESessionStatus,
    default: ESessionStatus.PENDING,
  })
  @IsEnum(ESessionStatus)
  status: ESessionStatus;

  // models
  @OneToOne(() => SharedLinkEntity, { onDelete: 'CASCADE' })
  @JoinColumn()
  @ValidateNested()
  @Type(() => SharedLinkEntity)
  sharedLink: SharedLinkEntity;

  @ManyToOne(() => ThemeEntity)
  @JoinColumn({ name: 'themeId' })
  @ValidateNested()
  @Type(() => ThemeEntity)
  theme: ThemeEntity;

  // aggregates
  @ManyToMany(() => RoleEntity)
  @JoinTable({
    name: Session_RolesAvailable__RoleTableName,
  })
  rolesAvailable: RoleEntity[];

  @ManyToMany(() => UserEntity)
  @JoinTable({
    name: Session_Participants__UserTableName,
  })
  participants: UserEntity[];
}
