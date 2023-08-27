import { TeamMember, TeamMemberMembershipStateEnum } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_common.entity';
import { TeamEntity } from './team.entity';
import { UserEntity } from './user.entity';

@Entity('TeamMember')
export class TeamMemberEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements TeamMember
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', {
    enum: TeamMemberMembershipStateEnum,
    default: TeamMemberMembershipStateEnum.INVITED,
  })
  @IsEnum(TeamMemberMembershipStateEnum)
  teamMemberMembershipState: TeamMemberMembershipStateEnum;

  @Column('text', { array: true })
  @IsArray()
  permissions: string[];

  @ManyToOne(() => UserEntity, (user) => user.teamMemberships)
  @ValidateNested()
  @Type(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => TeamEntity, (team) => team.members)
  @ValidateNested()
  @Type(() => TeamEntity)
  team: TeamEntity;
}
