import { Profile } from '@role-land/domain';
import { Column } from 'typeorm';

export class ProfileEmbeded implements Profile {
  @Column()
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}
