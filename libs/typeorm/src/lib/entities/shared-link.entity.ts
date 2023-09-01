import { ISharedLink } from '@role-land/domain';
import { IsBoolean, IsUrl } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { TimestampsEntityColumns } from './_common.entity';

// SharedLinkEntity: Manages the URLs shared within a session.
@Entity('SharedLink')
@Index('sharedLink_url_index', ['url'])
@Index('sharedLink_isActive_index', ['isActive'])
@Unique(['url'])
export class SharedLinkEntity
  extends TimestampsEntityColumns
  implements ISharedLink
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
