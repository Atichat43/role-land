import { IUser, IUserProfile } from '@role-land/domain';
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

// UserProfileEmbeded: Embedded within UserEntity, contains bio and interests
export class UserProfileEmbeded implements IUserProfile {
  @Column()
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
  username: string;

  @Column()
  password: string;

  @Column()
  globalName: string;

  @Column({ default: false })
  premiumStatus: boolean;

  @Column({ nullable: true })
  avatar: string | null;

  @Column(() => UserProfileEmbeded)
  profile: UserProfileEmbeded;

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
