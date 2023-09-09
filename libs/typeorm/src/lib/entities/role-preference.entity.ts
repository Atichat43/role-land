import { ERolePreference, IRolePreference } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsUrl, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';

export const RolePreferenceEntityTableName = 'RolePreference';

// RolePreferenceEntity: Manages user's role preferences.
@Entity(RolePreferenceEntityTableName)
export class RolePreferenceEntity implements IRolePreference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', { enum: ERolePreference })
  preference: ERolePreference;

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
