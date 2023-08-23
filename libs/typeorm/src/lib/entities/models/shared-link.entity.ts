import { Entity, PrimaryGeneratedColumn, Column, Unique, Index } from 'typeorm';
import { SharedLink } from '../../core/models.types';
import { BaseEntity } from '../_common.entity';

@Entity('SharedLink')
@Index('sharedLink_isActive_index', ['isActive']) // NOTE: query shared links by isActive
@Unique(['url'])
export class SharedLinkEntity extends BaseEntity implements SharedLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  isActive: boolean;
}
