import { Profile } from '@role-land/domain';
import { Length } from 'class-validator';
import { Column } from 'typeorm';

export class ProfileEmbeded implements Profile {
  @Column()
  @Length(0, 1000)
  bio: string;

  @Column('text', { array: true })
  interests: string[];
}
