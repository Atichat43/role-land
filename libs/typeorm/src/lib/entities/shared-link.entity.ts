import { SharedLink } from '@role-land/domain';
import { Column, Entity, Index,PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('SharedLink')
@Index('sharedLink_url_index', ['url']) // NOTE: query shared links by url
@Index('sharedLink_isActive_index', ['isActive']) // NOTE: query shared links by isActive
@Unique(['url'])
export class SharedLinkEntity implements SharedLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  isActive: boolean;
}
