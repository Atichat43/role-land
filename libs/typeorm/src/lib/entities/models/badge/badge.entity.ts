import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Badge } from '../../../core/models.types';
import { UserEntity } from '../../aggregates/user/user.entity';

@Entity('Badge')
export class BadgeEntity implements Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  badgeType: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => UserEntity, (user) => user.badges)
  user: UserEntity;
}
