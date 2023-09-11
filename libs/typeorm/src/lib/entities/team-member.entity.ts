import { ETeamMemberMembershipState, ITeamMember } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, ValidateNested } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_base.entity';
import { TeamEntity } from './team.entity';
import { UserEntity } from './user.entity';

export const TeamMemberEntityTableName = 'TeamMember';

@Entity(TeamMemberEntityTableName)
export class TeamMemberEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements ITeamMember
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', {
    enum: ETeamMemberMembershipState,
    default: ETeamMemberMembershipState.INVITED,
  })
  @IsEnum(ETeamMemberMembershipState)
  teamMemberMembershipState: ETeamMemberMembershipState;

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
