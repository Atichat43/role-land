import { ITeam } from '@role-land/core';
import { Type } from 'class-transformer';
import { IsEmpty, IsUrl, Length, ValidateNested } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_base.entity';
import { TeamMemberEntity } from './team-member.entity';
import { UserEntity } from './user.entity';

export const TeamEntityTableName = 'Team';

@Entity(TeamEntityTableName)
export class TeamEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements ITeam
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  name: string;

  @Column({ nullable: true })
  @IsUrl()
  icon: string | null;

  @ManyToOne(() => UserEntity, (user) => user.teamsOwned)
  @ValidateNested()
  @Type(() => UserEntity)
  owner: UserEntity;

  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.team)
  @Type(() => TeamMemberEntity)
  members: TeamMemberEntity[];
}
