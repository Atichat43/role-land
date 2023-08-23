import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Badge } from '../../core/models.types';

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
