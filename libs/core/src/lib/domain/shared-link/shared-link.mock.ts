import { v4 as uuid } from 'uuid';

import { ISharedLinkMock } from './shared-link.types';

const sharedLinkDefaultMockData: ISharedLinkMock[] = [
  {
    id: uuid(),
    url: 'https://www.idiot-alone-in-the-room.com',
    isActive: false,
  },
  {
    id: uuid(),
    url: 'https://www.role-land-expert-alone-in-the-room.com',
    isActive: false,
  },
  {
    id: uuid(),
    url: 'https://www.role-land-expert-be-in-the-room.com',
    isActive: true,
  },
  {
    id: uuid(),
    url: 'https://www.team-a-with-sd-theme.com',
    isActive: true,
  },
  {
    id: uuid(),
    url: 'https://www.team-b-with-werewolf-theme.com',
    isActive: true,
  },
];

class SharedLinkMock {
  data: {
    default: ISharedLinkMock[];
  };

  constructor() {
    this.data = {
      default: sharedLinkDefaultMockData,
    };
  }

  get(
    url:
      | 'https://www.idiot-alone-in-the-room.com'
      | 'https://www.role-land-expert-alone-in-the-room.com'
      | 'https://www.role-land-expert-be-in-the-room.com'
      | 'https://www.team-a-with-sd-theme.com'
      | 'https://www.team-b-with-werewolf-theme.com',
  ): ISharedLinkMock {
    const result = this.data.default.find(
      (sharedLink) => sharedLink.url === url,
    );

    if (!result) throw new Error(`SharedLink not found: ${url}`);

    return result;
  }

  getAllSharedLinks(): ISharedLinkMock[] {
    return this.data.default;
  }
}

const sharedLinkMock = new SharedLinkMock();

export default sharedLinkMock;
