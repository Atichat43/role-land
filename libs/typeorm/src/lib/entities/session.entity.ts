import { Session, SessionStatusEnum } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';
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
@Index('session_status_index', ['status'])
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
  @IsEnum(SessionStatusEnum)
  status: SessionStatusEnum;

  // models
  @OneToOne(() => SharedLinkEntity)
  @JoinColumn()
  @ValidateNested()
  @Type(() => SharedLinkEntity)
  sharedLink: SharedLinkEntity;

  @OneToOne(() => ThemeEntity)
  @JoinColumn()
  @ValidateNested()
  @Type(() => ThemeEntity)
  theme: ThemeEntity;

  // aggregates
  @ManyToMany(() => RoleEntity)
  @JoinTable()
  rolesAssigned: RoleEntity[];

  @ManyToMany(() => UserEntity)
  @JoinTable()
  participants: UserEntity[];
}
