import { Column, ManyToOne } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { RolePreference, RolePreferenceEnum } from '../../core/value-objects';

export class RolePreferenceEmbeded implements RolePreference {
  @Column('enum', { enum: RolePreferenceEnum })
  preference: RolePreferenceEnum;

  @ManyToOne(() => RoleEntity)
  role: RoleEntity;
}
