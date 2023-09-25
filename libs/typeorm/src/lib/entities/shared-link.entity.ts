import { ISharedLink } from '@role-land/core';
import { IsBoolean, IsUrl } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { TimestampsEntityColumns } from './_base.entity';

export const SharedLinkEntityTableName = 'SharedLink';

// SharedLinkEntity: Manages the URLs shared within a session.
@Entity(SharedLinkEntityTableName)
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
