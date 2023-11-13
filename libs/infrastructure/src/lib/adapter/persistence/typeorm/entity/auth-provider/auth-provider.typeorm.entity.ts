import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const AuthProviderEntityTableName = 'AuthProvider';

@Entity(AuthProviderEntityTableName)
export class AuthProviderTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  clientId: string;

  @Column()
  callbackUrl: string;
}
