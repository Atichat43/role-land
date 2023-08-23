import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Effect } from '../../core/models.types';
import { BaseEntity } from '../_common.entity';

@Entity('Effect')
export class EffectEntity extends BaseEntity implements Effect {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  premium: boolean;
}
