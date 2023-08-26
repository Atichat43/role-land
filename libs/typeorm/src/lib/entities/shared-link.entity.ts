import { SharedLink } from '@role-land/domain';
import { IsBoolean, IsUrl } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';

@Entity('SharedLink')
@Index('sharedLink_url_index', ['url']) // NOTE: query shared links by url
@Index('sharedLink_isActive_index', ['isActive']) // NOTE: query shared links by isActive
@Unique(['url'])
export class SharedLinkEntity
  extends TimestampsEntityColumns
  implements SharedLink
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsUrl()
  url: string;

  @Column({ default: false })
  @IsBoolean()
  isActive: boolean;
}
