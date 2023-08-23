import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { Theme } from '../../core/models.types';
import { BaseEntity } from '../_common.entity';

@Entity('Theme')
@Index('theme_premium_index', ['premium']) // NOTE: query themes by premium
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
