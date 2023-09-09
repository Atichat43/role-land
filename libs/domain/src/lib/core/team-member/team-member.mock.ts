import { ITeamMemberMock } from './team-member.types';

const teamMemberMockData: ITeamMemberMock[] = [];

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
}

const teamMemberMock = new TeamMemberMock();

export default teamMemberMock;
