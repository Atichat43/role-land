import { v4 as uuid } from 'uuid';

import roleMock from '../role/role.mock';
import { IThemeMock } from './theme.types';

const themeSeedData: IThemeMock[] = [
  {
    id: uuid(),
    name: 'Software Development',
    premium: false,
    roles: roleMock.getSoftwareDevelopmentRoles(),
  },
  {
    id: uuid(),
    name: 'Education',
    premium: true,
    roles: roleMock.getEducationRoles(),
  },
  {
    id: uuid(),
    name: 'Wareworf',
    premium: false,
    roles: roleMock.getWerewolfRoles(),
  },
];

class ThemeMock {
  data: {
    default: IThemeMock[];
  };

  constructor() {
    this.data = {
      default: themeSeedData,
    };
  }

  get(name: 'Software Development' | 'Education' | 'Wareworf'): IThemeMock {
    const result = this.data.default.find((theme) => theme.name === name);

    if (!result) throw new Error(`Theme ${name} not found`);

    return result;
  }

  getAllThemes(): IThemeMock[] {
    return this.data.default;
  }
}

const themeMock = new ThemeMock();

export default themeMock;
