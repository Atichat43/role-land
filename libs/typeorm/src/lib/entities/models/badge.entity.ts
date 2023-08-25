import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Badge } from '../../core/models.types';
import { UserEntity } from '../aggregates/user.entity';
import { TimestampsEntityColumns } from '../_common.entity';

@Entity('Badge')
export class BadgeEntity extends TimestampsEntityColumns implements Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  badgeType: string;

  @ManyToOne(() => UserEntity, (user) => user.badges)
  user: UserEntity;
}
