import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { SharedLink } from '../../core/models.types';
import { BaseEntity } from '../_common.entity';

@Entity('SharedLink')
export class SharedLinkEntity extends BaseEntity implements SharedLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  isActive: boolean;
}
