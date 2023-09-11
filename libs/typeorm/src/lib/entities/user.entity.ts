import { IProfile, IUser } from '@role-land/domain';
import { Type } from 'class-transformer';
import { IsBoolean, IsUrl, Length, ValidateNested } from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';

import { TimestampsAndSoftDeletionEntityColumns } from './_base.entity';
import { TeamEntity } from './team.entity';
import { TeamMemberEntity } from './team-member.entity';
import { UserAchievementEntity } from './user-achievement.entity';
import { UserAchievementProgressEntity } from './user-achievement-progress.entity';

export const UserEntityTableName = 'User';

// ProfileEmbeded: Embedded within UserEntity, contains bio and interests
export class ProfileEmbeded implements IProfile {
  @Column()
  @Length(0, 1000)
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}

@Entity(UserEntityTableName)
export class UserEntity
  extends TimestampsAndSoftDeletionEntityColumns
  implements IUser
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 25)
  username: string;

  @Column()
  @Length(1, 25)
  globalName: string;

  @Column({ default: false })
  @IsBoolean()
  premiumStatus: boolean;

  @Column({ nullable: true })
  @IsUrl()
  avatar: string | null;

  @Column(() => ProfileEmbeded)
  @ValidateNested()
  @Type(() => ProfileEmbeded)
  profile: ProfileEmbeded;

  @OneToMany(
    () => UserAchievementEntity,
    (userAchievement) => userAchievement.user,
  )
  userAchievements: UserAchievementEntity[];

  @OneToMany(
    () => UserAchievementProgressEntity,
    (userAchievementProgress) => userAchievementProgress.user,
  )
  userAchievementProgresses: UserAchievementProgressEntity[];

  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.user)
  teamMemberships: TeamMemberEntity[];

  @OneToMany(() => TeamEntity, (team) => team.owner)
  teamsOwned: TeamEntity[];

  // NOTE: optimistic concurrency control
  @VersionColumn({ default: 0 })
  version: number;
}
