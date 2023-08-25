import { Column } from 'typeorm';
import { Profile } from '../../core-domain/value-objects.types';

export class ProfileEmbeded implements Profile {
  @Column()
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}
