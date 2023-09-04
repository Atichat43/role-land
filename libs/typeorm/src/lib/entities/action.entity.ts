import {
  EActionKey,
  EActionType,
  EOrderingActionOperation,
  ERoleActionOperation,
  EStrategicActionOperation,
  ETargetEnum,
  ETimerActionOperation,
  IAction,
  IBaseActionConfig,
} from '@role-land/domain';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  Length,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';

export class ActionConfig implements IBaseActionConfig {
  @IsEnum(EActionType)
  type: EActionType;

  @IsEnum(ETargetEnum, { each: true })
  @IsOptional()
  target: ETargetEnum | null;

  @IsNumber()
  @IsOptional()
  @ValidateIf((o) => o.type === EActionType.Timer)
  duration: number | null;

  @IsEnum([
    ETimerActionOperation,
    EOrderingActionOperation,
    EStrategicActionOperation,
    ERoleActionOperation,
  ])
  operation:
    | ETimerActionOperation
    | EOrderingActionOperation
    | EStrategicActionOperation
    | ERoleActionOperation;
}

@Entity('Action')
export class ActionEntity extends TimestampsEntityColumns implements IAction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', {
    enum: EActionKey,
    default: EActionKey.Blank,
  })
  @IsEnum(EActionKey)
  key: EActionKey;

  @Column()
  @Length(1, 25)
  name: string;

  @Column()
  @Length(1, 100)
  des: string;

  @Column()
  @IsBoolean()
  isBaseAction: boolean;

  @Column('jsonb', { nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ActionConfig)
  config: IAction['config'];

  @Column({ nullable: true })
  @Length(1, 1000)
  longDesc: string | null;
}
