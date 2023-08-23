import { User, Role } from 'discord.js';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { SharedLinkEntity } from '../../models/shared-link/shared-link.entity';
import { Session } from '../../../core/aggregates.types';
import { UserEntity } from '../user/user.entity';
import { RoleEntity } from '../../models/role/role.entity';
import { ThemeEntity } from '../../models/theme/theme.entity';

@Entity('Session')
export class SessionEntity implements Session {
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
