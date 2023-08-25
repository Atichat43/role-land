import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { Effect } from '../../core-domain/models.types';
import { TimestampsEntityColumns } from '../_common.entity';

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
