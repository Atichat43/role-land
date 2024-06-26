import { v4 as uuid } from 'uuid';

import { IMergeUsernames } from './user.mock.types';
import { IUser, IUserMock } from './user.types';

const userMockData: IUserMock[] = [
  {
    id: uuid(),
    username: 'idiot',
    globalName: 'Idiot who knows nothing',
    premiumStatus: false,
    avatar: null,
    profile: {
      bio: 'I am an idiot who knows nothing about anything and everything',
      interests: [],
    },
  },
  {
    id: uuid(),
    username: 'role-land-expert',
    globalName: 'Role Land Expert',
    premiumStatus: true,
    avatar: 'https://role-land-expert-avatar.png',
    profile: {
      bio: 'I am an expert in Role Land',
      interests: ['role-land', 'role-land-expert'],
    },
  },
  {
    id: uuid(),
    username: 'product-owner-team-a-b',
    globalName: 'Product Owner Team A and B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the product owner of Team A and Team B',
      interests: ['product-owner', 'team-a', 'team-b'],
    },
  },

  // team A: mini team
  {
    id: uuid(),
    username: 'backend-developer-1-team-a',
    globalName: 'Backend Developer 1 Team A',
    premiumStatus: false,
    avatar: null,
    profile: {
      bio: 'I am the backend developer 1 of Team A',
      interests: ['backend-developer', 'team-a'],
    },
  },
  {
    id: uuid(),
    username: 'backend-developer-2-team-a',
    globalName: 'Backend Developer 2 Team A',
    premiumStatus: false,
    avatar: null,
    profile: {
      bio: 'I am the backend developer 2 of Team A',
      interests: ['backend-developer', 'team-a'],
    },
  },
  {
    id: uuid(),
    username: 'frontend-developer-1-team-a',
    globalName: 'Frontend Developer 1 Team A',
    premiumStatus: false,
    avatar: null,
    profile: {
      bio: 'I am the frontend developer 1 of Team A',
      interests: ['frontend-developer', 'team-a'],
    },
  },

  // team B: full team
  {
    id: uuid(),
    username: 'backend-developer-1-team-b',
    globalName: 'Backend Developer 1 Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the backend developer 1 of Team B',
      interests: ['backend-developer', 'team-b'],
    },
  },
  {
    id: uuid(),
    username: 'backend-developer-2-team-b',
    globalName: 'Backend Developer 2 Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the backend developer 2 of Team B',
      interests: ['backend-developer', 'team-b'],
    },
  },
  {
    id: uuid(),
    username: 'frontend-developer-1-team-b',
    globalName: 'Frontend Developer 1 Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the frontend developer 1 of Team B',
      interests: ['frontend-developer', 'team-b'],
    },
  },
  {
    id: uuid(),
    username: 'frontend-developer-2-team-b',
    globalName: 'Frontend Developer 2 Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the frontend developer 2 of Team B',
      interests: ['frontend-developer', 'team-b'],
    },
  },
  {
    id: uuid(),
    username: 'dev-ops-team-b',
    globalName: 'Dev Ops Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the dev ops of Team B',
      interests: ['dev-ops', 'team-B'],
    },
  },
  {
    id: uuid(),
    username: 'qa-team-b',
    globalName: 'QA Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the QA of Team B',
      interests: ['qa', 'team-b'],
    },
  },
  {
    id: uuid(),
    username: 'client-team-b',
    globalName: 'Client Team B',
    premiumStatus: true,
    avatar: null,
    profile: {
      bio: 'I am the client of Team B',
      interests: ['client', 'team-b'],
    },
  },
];

class UserMock {
  data: {
    default: IUserMock[];
  };

  constructor() {
    this.data = {
      default: userMockData,
    };
  }

  get(username: IMergeUsernames): IUserMock {
    const result = this.data.default.find((user) => user.username === username);

    if (!result) throw new Error(`User ${username} not found`);

    return result;
  }

  getAllUsers(): IUserMock[] {
    return this.data.default;
  }

  getAllUsersInTeam(teamId: 'team-a' | 'team-b'): IUserMock[] {
    return this.data.default.filter((user) => user.username.includes(teamId));
  }
}

const userMock = new UserMock();

export default userMock;
