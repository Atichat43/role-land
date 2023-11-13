import { v4 } from 'uuid';

import { IAuthProviderMock } from '../type';

const authProviderMockData: IAuthProviderMock[] = [
  {
    id: v4(),
    name: 'google',
    clientId: 'google-client-id',
    callbackUrl: 'https://google.com/callback',
  },
  {
    id: v4(),
    name: 'github',
    clientId: 'github-client-id',
    callbackUrl: 'https://github.com/callback',
  },
  {
    id: v4(),
    name: 'discord',
    clientId: 'discord-client-id',
    callbackUrl: 'https://discord.com/callback',
  },
  {
    id: v4(),
    name: 'slack',
    clientId: 'slack-client-id',
    callbackUrl: 'https://slack.com/callback',
  },
];

class AuthProviderMock {
  data: {
    default: IAuthProviderMock[];
  };

  constructor() {
    this.data = {
      default: authProviderMockData,
    };
  }

  get(by: { name: string }): IAuthProviderMock {
    const result = this.data.default.find(
      (authProvider) => authProvider.name === by.name,
    );

    if (!result) {
      throw new Error(`AuthProvider ${by.name} not found`);
    }

    return result;
  }

  getAllAuthProvider(): IAuthProviderMock[] {
    return this.data.default;
  }
}

export const authProviderMock = new AuthProviderMock();
