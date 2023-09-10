import { v4 as uuid } from 'uuid';

import teamMock from '../team/team.mock';
import userMock from '../user/user.mock';
import { ETeamMemberMembershipState } from './team-member.enum';
import { ITeamMemberMock } from './team-member.types';

/**
 * Team A
 * - Idiot: invited
 * - Product Owner Team A and B: accepted
 * - Backend Developer 1 Team A: accepted
 * - Backend Developer 2 Team A: accepted
 * - Frontend Developer 1 Team A: accepted
 * - Frontend Developer 2 Team A: accepted
 *
 * Team B
 * - Idiot: invited
 * - Product Owner Team A and B: accepted
 * - Backend Developer 1 Team B: accepted
 * - Backend Developer 2 Team B: accepted
 * - Frontend Developer 1 Team B: accepted
 * - Frontend Developer 2 Team B: accepted
 * - Dev Ops Team B: accepted
 * - QA Team B: accepted
 * - Client Team B: accepted
 */

const teamMemberIdiotMockData: ITeamMemberMock[] = [
  {
    id: uuid(),
    teamMemberMembershipState: ETeamMemberMembershipState.INVITED,
    permissions: [],
    user: userMock.get('idiot'),
    team: teamMock.get('A'),
  },
  {
    id: uuid(),
    teamMemberMembershipState: ETeamMemberMembershipState.INVITED,
    permissions: [],
    user: userMock.get('idiot'),
    team: teamMock.get('B'),
  },
];

const teamMemberTeamAMockData: ITeamMemberMock[] = userMock
  .getAllUsersInTeam('team-a')
  .map((user) => ({
    id: uuid(),
    teamMemberMembershipState: ETeamMemberMembershipState.ACCEPTED,
    permissions: [],
    user,
    team: teamMock.get('A'),
  }));

const teamMemberTeamBMockData: ITeamMemberMock[] = userMock
  .getAllUsersInTeam('team-b')
  .map((user) => ({
    id: uuid(),
    teamMemberMembershipState: ETeamMemberMembershipState.ACCEPTED,
    permissions: [],
    user,
    team: teamMock.get('B'),
  }));

const teamMemberMockData: ITeamMemberMock[] = [
  ...teamMemberIdiotMockData,
  ...teamMemberTeamAMockData,
  ...teamMemberTeamBMockData,
];

class TeamMemberMock {
  data: {
    default: ITeamMemberMock[];
  };

  constructor() {
    this.data = {
      default: teamMemberMockData,
    };
  }

  get(id: string): ITeamMemberMock {
    const result = this.data.default.find((teamMember) => teamMember.id === id);

    if (!result) throw new Error(`Team Member ${id} not found`);

    return result;
  }

  getAllTeamMembers(): ITeamMemberMock[] {
    return this.data.default;
  }

  getAllTeamMembersInTeam(teamId: 'team-a' | 'team-b'): ITeamMemberMock[] {
    return this.data.default.filter(
      (teamMember) => teamMember.team.id === teamId,
    );
  }
}

const teamMemberMock = new TeamMemberMock();

export default teamMemberMock;
