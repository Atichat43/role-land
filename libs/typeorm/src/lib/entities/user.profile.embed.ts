import { IProfile } from '@role-land/domain';
import { Length } from 'class-validator';
import { Column } from 'typeorm';

// ProfileEmbeded: Embedded within UserEntity, contains bio and interests
export class ProfileEmbeded implements IProfile {
  @Column()
  @Length(0, 1000)
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}
