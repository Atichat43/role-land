import {
  RolePreference,
  RolePreferenceEnum,
} from 'libs/typeorm/src/lib/core/value-objects.types';
import { Column, ManyToOne } from 'typeorm';
import { RoleEntity } from '../models/role.entity';

export class RolePreferenceEmbeded implements RolePreference {
  @Column('enum', { enum: RolePreferenceEnum })
  preference: RolePreferenceEnum;

  @ManyToOne(() => RoleEntity)
  role: RoleEntity;
}
