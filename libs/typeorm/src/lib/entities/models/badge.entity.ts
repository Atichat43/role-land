import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Badge } from '../../core/models.types';
import { UserEntity } from '../aggregates/user.entity';
import { BaseEntity } from '../_common.entity';

@Entity('Badge')
export class BadgeEntity extends BaseEntity implements Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  badgeType: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => UserEntity, (user) => user.badges)
  user: UserEntity;
}
