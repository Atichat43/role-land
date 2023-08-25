import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ThemeEntity } from './theme.entity';
import { Role } from '../../core-domain/models.types';
import { TimestampsEntityColumns } from '../_common.entity';

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
