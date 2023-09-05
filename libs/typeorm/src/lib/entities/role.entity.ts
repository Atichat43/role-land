import { IRole, ISkillTemplate } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsUrl, Length, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { ThemeEntity } from './theme.entity';

// RoleEntity: Manages the roles within a theme.
@Entity('Role')
export class RoleEntity extends TimestampsEntityColumns implements IRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column('jsonb', { nullable: true })
  skills: ISkillTemplate[];

  @Column({ nullable: true })
  @IsUrl()
  defaultImage: string | null;

  @ManyToOne(() => ThemeEntity, (theme) => theme.roles)
  @ValidateNested()
  @Type(() => ThemeEntity)
  theme: ThemeEntity;
}
