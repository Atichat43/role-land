import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ThemeEntity } from '../theme/theme.entity';
import { Role } from '../../core/models.types';

@Entity()
export class RoleEntity implements Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => ThemeEntity, (theme) => theme.roles)
  theme: ThemeEntity;

  @Column('text', { array: true })
  attributes: string[];
}
