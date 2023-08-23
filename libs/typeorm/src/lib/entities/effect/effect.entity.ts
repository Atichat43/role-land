import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Effect } from '../../core/models.types';

@Entity()
export class EffectEntity implements Effect {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  premium: boolean;
}
