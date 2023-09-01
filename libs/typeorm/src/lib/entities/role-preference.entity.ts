import { RolePreference, RolePreferenceEnum } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsUrl, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';

// RolePreferenceEntity: Manages user's role preferences.
@Entity('RolePreference')
export class RolePreferenceEntity implements RolePreference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', { enum: RolePreferenceEnum })
  preference: RolePreferenceEnum;

  @Column({ nullable: true })
  @IsUrl()
  customImage: string | null;

  @ManyToOne(() => RoleEntity)
  @ValidateNested()
  @Type(() => RoleEntity)
  role: RoleEntity;

  @ManyToOne(() => UserEntity, (user) => user.rolePreferences)
  @ValidateNested()
  @Type(() => UserEntity)
  user: UserEntity;
}
