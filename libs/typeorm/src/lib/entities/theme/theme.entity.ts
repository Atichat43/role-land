import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { Theme } from '../../core/models.types';

@Entity('Theme')
export class ThemeEntity implements Theme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => RoleEntity, (role) => role.theme)
  roles: RoleEntity[];

  @Column()
  premium: boolean;
}
