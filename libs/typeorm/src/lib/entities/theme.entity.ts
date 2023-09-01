import { Theme } from '@role-land/domain';
import { IsBoolean, Length } from 'class-validator';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { RoleEntity } from './role.entity';

// ThemeEntity: Manages the themes available in the application.
@Entity('Theme')
@Index('theme_premium_index', ['premium'])
export class ThemeEntity extends TimestampsEntityColumns implements Theme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column({ default: false })
  @IsBoolean()
  premium: boolean;

  @OneToMany(() => RoleEntity, (role) => role.theme)
  roles: RoleEntity[];
}
