import { IBadge } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { UserEntity } from './user.entity';

export const BadgeEntityTableName = 'Badge';

@Entity(BadgeEntityTableName)
export class BadgeEntity extends TimestampsEntityColumns implements IBadge {
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
