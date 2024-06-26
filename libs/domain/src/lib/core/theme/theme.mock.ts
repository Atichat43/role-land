import { v4 as uuid } from 'uuid';

import { EThemeKey } from './theme.enum';
import { IThemeMock } from './theme.types';

const themeSeedData: IThemeMock[] = [
  {
    id: uuid(),
    key: EThemeKey.SoftwareDevelopment,
    name: 'Software Development',
    premium: false,
    roles: [],
  },
  {
    id: uuid(),
    key: EThemeKey.Education,
    name: 'Education',
    premium: true,
    roles: [],
  },
  {
    id: uuid(),
    key: EThemeKey.Werewolf,
    name: 'Werewolf',
    premium: false,
    roles: [],
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

  get(key: EThemeKey): IThemeMock {
    const result = this.data.default.find((theme) => theme.key === key);

    if (!result) throw new Error(`Theme ${name} not found`);

    return result;
  }

  getAllThemes(): IThemeMock[] {
    return this.data.default;
  }
}

const themeMock = new ThemeMock();

export default themeMock;
