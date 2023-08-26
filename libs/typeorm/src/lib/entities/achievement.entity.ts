import { Achievement } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { UserEntity } from './user.entity';

@Entity('Achievement')
export class AchievementEntity
  extends TimestampsEntityColumns
  implements Achievement
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  achievementType: string;

  @ManyToOne(() => UserEntity, (user) => user.achievements)
  @ValidateNested()
  @Type(() => UserEntity)
  user: UserEntity;
}
