import {
  EAchievementCategory,
  EStackableLimit,
  IAchievement,
  IAchievementMilestone,
  IMergeTypeAchievementSubCategory,
  MERGE_TYPE_ACHIEVEMENT_SUB_CATEGORY,
} from '@role-land/domain';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsUrl,
  Length,
  Min,
  ValidateNested,
} from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { UserEntity } from './user.entity';

export class AchievementMilestone implements IAchievementMilestone {
  @Column()
  @IsInt()
  @Min(1)
  count: number;

  @Column()
  @IsUrl()
  iconUrl: string;

  @Column()
  @Length(1, 100)
  description: string;

  @Column({ default: false })
  @IsBoolean()
  isStackable: boolean;

  @Column('enum', {
    enum: EStackableLimit,
    nullable: true,
  })
  stackableLimit: EStackableLimit | null;
}

export const AchievementEntityTableName = 'Achievement';

@Entity(AchievementEntityTableName)
export class AchievementEntity
  extends TimestampsEntityColumns
  implements IAchievement
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column('enum', {
    enum: EAchievementCategory,
  })
  category: EAchievementCategory;

  @Column('enum', {
    enum: MERGE_TYPE_ACHIEVEMENT_SUB_CATEGORY,
  })
  subCategory: IMergeTypeAchievementSubCategory;

  @Column('jsonb', { nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AchievementMilestone)
  milestones: AchievementMilestone[];

  @ManyToOne(() => UserEntity, (user) => user.userAchievements)
  @ValidateNested()
  @Type(() => UserEntity)
  user: UserEntity;
}
