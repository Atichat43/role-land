import { Column } from 'typeorm';
import { Profile } from '../../core/value-objects';

export class ProfileEmbeded implements Profile {
  @Column()
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}
