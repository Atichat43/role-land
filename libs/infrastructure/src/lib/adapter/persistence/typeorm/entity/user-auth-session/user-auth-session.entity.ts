import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryColumn,
} from 'typeorm';

export const UserAuthSessionEntityTableName = 'UserAuthSession';

@Entity(UserAuthSessionEntityTableName)
export class UserAuthSessionEntity {
  @Index()
  @Column('bigint')
  public expiredAt = Date.now();

  @PrimaryColumn('varchar', { length: 255 })
  public id = '';

  @Column('text')
  public json = '';

  @DeleteDateColumn()
  public destroyedAt?: Date;
}
