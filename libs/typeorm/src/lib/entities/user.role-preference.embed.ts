import { RolePreference, RolePreferenceEnum } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsEnum, IsUrl, ValidateNested } from 'class-validator';
import { Column, ManyToOne } from 'typeorm';

import { RoleEntity } from './role.entity';

export class RolePreferenceEmbeded implements RolePreference {
  @Column('enum', { enum: RolePreferenceEnum })
  @IsEnum(RolePreferenceEnum)
  preference: RolePreferenceEnum;

  @Column({ nullable: true })
  @IsUrl()
  customImage?: string;

  @ManyToOne(() => RoleEntity)
  @ValidateNested()
  @Type(() => RoleEntity)
  role: RoleEntity;
}
