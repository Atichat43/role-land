import { Effect } from '@role-land/domain';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';

@Entity('Effect')
@Index('effect_premium_index', ['premium']) // NOTE: query themes by premium
export class EffectEntity extends TimestampsEntityColumns implements Effect {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  premium: boolean;
}
