import { ICreateAuthProviderPayload } from '@role-land/core';

const CreateUserPayloadMock: ICreateAuthProviderPayload[] = [
  {
    name: 'google',
    clientId: '123456789',
    callbackUrl: 'http://localhost:3000/auth/google/callback',
  },
];

export class UserTypeOrmMock {
  private data: ICreateAuthProviderPayload[];

  constructor() {
    this.data = CreateUserPayloadMock;
  }

  getData(): ICreateAuthProviderPayload[] {
    return this.data;
  }
}
