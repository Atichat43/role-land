import { v4 as uuid } from 'uuid';

import { IUserMock } from '../user';
import userMock from '../user/user.mock';
import { ITeamMock } from './team.types';

const teamMockData: ITeamMock[] = [
  {
    id: uuid(),
    name: 'Team A',
    icon: null,
    owner: userMock.get('product-owner-team-a-b') as IUserMock,
  },
  {
    id: uuid(),
    name: 'Team B',
    icon: 'https://team-b-icon.png',
    owner: userMock.get('product-owner-team-a-b') as IUserMock,
  },
];

class TeamMock {
  data: {
    default: ITeamMock[];
  };

  constructor() {
    this.data = {
      default: teamMockData,
    };
  }

  get(name: 'A' | 'B'): ITeamMock {
    const result = this.data.default.find((team) => team.name.includes(name));

    if (!result) throw new Error(`Team ${name} not found`);

    return result;
  }

  getAllTeams(): ITeamMock[] {
    return this.data.default;
  }
}

const teamMock = new TeamMock();

export default teamMock;
