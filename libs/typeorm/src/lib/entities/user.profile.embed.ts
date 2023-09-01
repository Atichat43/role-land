import { Profile } from '@role-land/domain';
import { Length } from 'class-validator';
import { Column } from 'typeorm';

// ProfileEmbeded: Embedded within UserEntity, contains bio and interests
export class ProfileEmbeded implements Profile {
  @Column()
  @Length(0, 1000)
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}
