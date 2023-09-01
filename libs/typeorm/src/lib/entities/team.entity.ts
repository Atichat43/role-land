import { ITeam } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsEmpty, IsUrl, Length, ValidateNested } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_common.entity';
import { TeamMemberEntity } from './team-member.entity';
import { UserEntity } from './user.entity';

@Entity('Team')
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

  @OneToOne(() => UserEntity)
  @JoinColumn()
  @ValidateNested()
  @Type(() => UserEntity)
  owner: UserEntity;

  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.team)
  @Type(() => TeamMemberEntity)
  members: TeamMemberEntity[];
}
