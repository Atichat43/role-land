import { IsString, IsUrl, Length } from 'class-validator';
import { v4 } from 'uuid';

import { Entity } from '../../../_shared/entity';
import { IAuthProvider, ICreateAuthProviderPayload } from './type';

export class AuthProvider extends Entity<string> implements IAuthProvider {
  @IsString()
  @Length(1, 25)
  name: string;

  @IsString()
  clientId: string;

  @IsString()
  @IsUrl()
  callbackUrl: string;

  constructor(payload: ICreateAuthProviderPayload) {
    super();
    this.id = payload.id ?? v4();

    this.name = payload.name;
    this.clientId = payload.clientId;
    this.callbackUrl = payload.callbackUrl;
  }

  public static async new(
    payload: ICreateAuthProviderPayload,
  ): Promise<AuthProvider> {
    const authProvider = new AuthProvider(payload);
    await authProvider.validate();

    return authProvider;
  }
}
