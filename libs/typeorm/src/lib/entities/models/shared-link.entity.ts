import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('SharedLink')
export class SharedLinkEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  isActive: boolean;
}
