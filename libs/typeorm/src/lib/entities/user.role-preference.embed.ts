import { RolePreference, RolePreferenceEnum } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';
import { Column, ManyToOne } from 'typeorm';

import { RoleEntity } from './role.entity';

export class RolePreferenceEmbeded implements RolePreference {
  @Column('enum', { enum: RolePreferenceEnum })
  @IsEnum(RolePreferenceEnum)
  preference: RolePreferenceEnum;

  @ManyToOne(() => RoleEntity)
  @ValidateNested()
  @Type(() => RoleEntity)
  role: RoleEntity;
}
