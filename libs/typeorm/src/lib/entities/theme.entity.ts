import { Theme } from '@role-land/domain';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { RoleEntity } from './role.entity';

@Entity('Theme')
@Index('theme_premium_index', ['premium']) // NOTE: query themes by premium
export class ThemeEntity extends TimestampsEntityColumns implements Theme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => RoleEntity, (role) => role.theme)
  roles: RoleEntity[];

  @Column()
  premium: boolean;
}
