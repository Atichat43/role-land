import { IEffect } from '@role-land/domain';
import { IsBoolean, Length } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';

@Entity('Effect')
@Index('effect_premium_index', ['premium']) // NOTE: query themes by premium
export class EffectEntity extends TimestampsEntityColumns implements IEffect {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column({ default: false })
  @IsBoolean()
  premium: boolean;
}
