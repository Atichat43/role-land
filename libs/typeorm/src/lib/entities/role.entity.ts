import { Role } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsUrl, Length, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { ThemeEntity } from './theme.entity';

@Entity('Role')
export class RoleEntity extends TimestampsEntityColumns implements Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column('text', { array: true })
  attributes: string[];

  @Column({ nullable: true })
  @IsUrl()
  defaultImage?: string;

  @ManyToOne(() => ThemeEntity, (theme) => theme.roles)
  @ValidateNested()
  @Type(() => ThemeEntity)
  theme: ThemeEntity;
}
