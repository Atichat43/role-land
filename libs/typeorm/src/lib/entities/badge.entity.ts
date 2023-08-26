import { Badge } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { UserEntity } from './user.entity';

@Entity('Badge')
export class BadgeEntity extends TimestampsEntityColumns implements Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  badgeType: string;

  @ManyToOne(() => UserEntity, (user) => user.badges)
  @ValidateNested()
  @Type(() => UserEntity)
  user: UserEntity;
}
