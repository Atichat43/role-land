import { EUserRole } from '@role-land/core';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const UserEntityTableName = 'User';

@Entity(UserEntityTableName)
export class UserTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('enum', { enum: EUserRole })
  role: EUserRole;
}
