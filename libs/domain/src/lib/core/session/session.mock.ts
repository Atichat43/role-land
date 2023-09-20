import { v4 as uuid } from 'uuid';

import { ERoleKey } from '../role';
import roleMock from '../role/role.mock';
import sharedLinkMock from '../shared-link/shared-link.mock';
import { EThemeKey } from '../theme';
import themeMock from '../theme/theme.mock';
import { userMock } from '../user/entity/mock';
import { ESessionStatus } from './session.enum';
import { ISessionMock } from './session.types';

const sessionDefaultMockData: ISessionMock[] = [
  {
    id: uuid(),
    status: ESessionStatus.ENDED,
    sharedLink: sharedLinkMock.get('https://www.idiot-alone-in-the-room.com'),
    theme: themeMock.get(EThemeKey.SoftwareDevelopment),
    rolesAvailable: roleMock.getSoftwareDevelopmentRoles(),
    participants: [userMock.get('idiot')],
  },
  {
    id: uuid(),
    status: ESessionStatus.ENDED,
    sharedLink: sharedLinkMock.get(
      'https://www.role-land-expert-alone-in-the-room.com',
    ),
    theme: themeMock.get(EThemeKey.Education),
    rolesAvailable: [
      roleMock.get(ERoleKey.EduStudent),
      roleMock.get(ERoleKey.EduTeacher),
    ],
    participants: [userMock.get('role-land-expert')],
  },
  {
    id: uuid(),
    status: ESessionStatus.PENDING,
    sharedLink: sharedLinkMock.get(
      'https://www.role-land-expert-be-in-the-room.com',
    ),
    theme: themeMock.get(EThemeKey.Education),
    rolesAvailable: [],
    participants: [userMock.get('role-land-expert')],
  },
  {
    id: uuid(),
    status: ESessionStatus.STARTED,
    sharedLink: sharedLinkMock.get('https://www.team-a-with-sd-theme.com'),
    theme: themeMock.get(EThemeKey.SoftwareDevelopment),
    rolesAvailable: roleMock.getSoftwareDevelopmentRoles(),
    participants: userMock.getAllUsersInTeam('team-a'),
  },
  {
    id: uuid(),
    status: ESessionStatus.STARTED,
    sharedLink: sharedLinkMock.get(
      'https://www.team-b-with-werewolf-theme.com',
    ),
    theme: themeMock.get(EThemeKey.Werewolf),
    rolesAvailable: roleMock.getWerewolfRoles(),
    participants: userMock.getAllUsersInTeam('team-b'),
  },
];

class SessionMock {
  data: {
    default: ISessionMock[];
  };

  constructor() {
    this.data = {
      default: sessionDefaultMockData,
    };
  }

  get(
    url:
      | 'https://www.idiot-alone-in-the-room.com'
      | 'https://www.role-land-expert-alone-in-the-room.com'
      | 'https://www.role-land-expert-be-in-the-room.com'
      | 'https://www.team-a-with-sd-theme.com'
      | 'https://www.team-b-with-werewolf-theme.com',
  ): ISessionMock {
    const result = this.data.default.find(
      (session) => session.sharedLink.url === url,
    );

    if (!result) throw new Error(`Session not found: ${url}`);

    return result;
  }

  getAllSessions(): ISessionMock[] {
    return this.data.default;
  }
}

const sessionMock = new SessionMock();

export default sessionMock;
