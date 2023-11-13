import { Nullable } from '@role-land/utility-types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AuthProviderTypeOrmEntity } from '../auth-provider/auth-provider.typeorm.entity';
import { UserTypeOrmEntity } from '../user/user.typeorm.entity';

export const UserAuthEntityTableName = 'UserAuth';

@Entity(UserAuthEntityTableName)
export class UserAuthTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  providerUserId: string;

  @Column('varchar', { nullable: true })
  accessToken: Nullable<string>;

  @Column('varchar', { nullable: true })
  refreshToken: Nullable<string>;

  @Column()
  userId: string;

  @ManyToOne(() => UserTypeOrmEntity, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: UserTypeOrmEntity;

  @Column()
  authProviderId: string;

  @ManyToOne(() => AuthProviderTypeOrmEntity, (authProvider) => authProvider.id)
  @JoinColumn({ name: 'authProviderId' })
  authProvider: UserTypeOrmEntity;
}
