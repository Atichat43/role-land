import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoleEntity } from './role.entity';
import { Theme } from '../../core/models.types';
import { BaseEntity } from '../_common.entity';

@Entity('Theme')
export class ThemeEntity extends BaseEntity implements Theme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => RoleEntity, (role) => role.theme)
  roles: RoleEntity[];

  @Column()
  premium: boolean;
}
