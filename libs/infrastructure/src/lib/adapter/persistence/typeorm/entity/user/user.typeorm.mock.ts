import { ICreateUserPayload } from '@role-land/core';

const CreateUserPayloadMock: ICreateUserPayload[] = [
  {
    username: 'username',
    password: '1234',
  },
];

export class UserTypeOrmMock {
  private data: ICreateUserPayload[];

  constructor() {
    this.data = CreateUserPayloadMock;
  }

  getData(): ICreateUserPayload[] {
    return this.data;
  }
}
