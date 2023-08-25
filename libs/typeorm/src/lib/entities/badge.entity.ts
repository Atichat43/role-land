import { Badge } from '@role-land/domain';
import { Column, Entity, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';
import { UserEntity } from './user.entity';

@Entity('Badge')
export class BadgeEntity extends TimestampsEntityColumns implements Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  badgeType: string;

  @ManyToOne(() => UserEntity, (user) => user.badges)
  user: UserEntity;
}
