import { RolePreference, RolePreferenceEnum } from '@role-land/domain';
import { Column, ManyToOne } from 'typeorm';

import { RoleEntity } from './role.entity';

export class RolePreferenceEmbeded implements RolePreference {
  @Column('enum', { enum: RolePreferenceEnum })
  preference: RolePreferenceEnum;

  @ManyToOne(() => RoleEntity)
  role: RoleEntity;
}
