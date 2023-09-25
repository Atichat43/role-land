import { EThemeKey, ITheme } from '@role-land/core';
import { IsBoolean, Length } from 'class-validator';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsEntityColumns } from './_base.entity';
import { RoleEntity } from './role.entity';

export const ThemeEntityTableName = 'Theme';

// ThemeEntity: Manages the themes available in the application.
@Entity(ThemeEntityTableName)
@Index('theme_premium_index', ['premium'])
export class ThemeEntity extends TimestampsEntityColumns implements ITheme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', { enum: EThemeKey })
  key: EThemeKey;

  @Column()
  @Length(1, 25)
  name: string;

  @Column({ default: false })
  @IsBoolean()
  premium: boolean;

  @OneToMany(() => RoleEntity, (role) => role.theme)
  roles: RoleEntity[];
}
