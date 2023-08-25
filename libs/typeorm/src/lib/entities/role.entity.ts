import { Role } from '@role-land/domain';
import { Column, Entity, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { ThemeEntity } from './theme.entity';

@Entity('Role')
export class RoleEntity extends TimestampsEntityColumns implements Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => ThemeEntity, (theme) => theme.roles)
  theme: ThemeEntity;

  @Column('text', { array: true })
  attributes: string[];
}
