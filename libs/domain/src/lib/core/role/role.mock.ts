import { v4 as uuid } from 'uuid';

import { EActionKey } from '../action';
import actionMock from '../action/action.mock';
import { IRoleMock } from './role.types';

const softwareDevelopementRoleMock: IRoleMock[] = [
  {
    id: uuid(),
    name: 'Product Owner',
    defaultImage: 'https://product-owner-default.png',
    skills: [
      {
        name: 'Coffee Break',
        actionId: actionMock.get(EActionKey.FreezeTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Setup new Meeting',
        actionId: actionMock.get(EActionKey.RandomizeOrder).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Change Requirements',
        actionId: actionMock.get(EActionKey.Veto).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Backend Developer',
    defaultImage: 'https://backend-developer-default.png',
    skills: [
      {
        name: 'Debug',
        actionId: actionMock.get(EActionKey.SkipTurn).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Hidden Feature',
        actionId: actionMock.get(EActionKey.ExtraTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Frontend Developer',
    defaultImage: 'https://frontend-developer-default.png',
    skills: [
      {
        name: 'Debug',
        actionId: actionMock.get(EActionKey.SkipTurn).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Hidden Feature',
        actionId: actionMock.get(EActionKey.ExtraTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'DevOps',
    defaultImage: 'https://devops-default.png',
    skills: [
      {
        name: 'Debug',
        actionId: actionMock.get(EActionKey.SkipTurn).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Deploy',
        actionId: actionMock.get(EActionKey.ReverseOrder).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Lint&Test Error',

        actionId: actionMock.get(EActionKey.Echo).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'QA',
    defaultImage: 'https://qa-default.png',
    skills: [
      {
        name: 'Run Automation Tests',
        actionId: actionMock.get(EActionKey.SkipTurn).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Testing',
        actionId: actionMock.get(EActionKey.ExtraTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Move to Backlog',
        actionId: actionMock.get(EActionKey.ReverseOrder).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Client',
    defaultImage: 'https://client-default.png',
    skills: [
      {
        name: 'Change Requirements',
        actionId: actionMock.get(EActionKey.Veto).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Reduce Budget',
        actionId: actionMock.get(EActionKey.TimeBomb).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Raise Budget',
        actionId: actionMock.get(EActionKey.GiftTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
    ],
  },
];

const educationRoleMock: IRoleMock[] = [
  {
    id: uuid(),
    name: 'Principal',
    defaultImage: 'https://principal-default.png',
    skills: [
      {
        name: 'Break',
        actionId: actionMock.get(EActionKey.FreezeTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Grant Writing',
        actionId: actionMock.get(EActionKey.Wildcard).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Teacher Evaluation',
        actionId: actionMock.get(EActionKey.SwapRole).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Student',
    defaultImage: 'https://student-default.png',
    skills: [
      {
        name: 'Ask Question',
        actionId: actionMock.get(EActionKey.Joker).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Do Homework',
        actionId: actionMock.get(EActionKey.Hide).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Quick Learner',
        actionId: actionMock.get(EActionKey.PickPocket).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'School Nurse',
    defaultImage: 'https://school-nurse-default.png',
    skills: [
      {
        name: 'Emergency Drill',
        actionId: actionMock.get(EActionKey.SkipTurn).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'First Aid',
        actionId: actionMock.get(EActionKey.ExtraTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Janitorial Staff',
    defaultImage: 'https://janitorial-staff-default.png',
    skills: [
      {
        name: 'Clean Up',
        actionId: actionMock.get(EActionKey.SkipTurn).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
      {
        name: 'Emergency Cleanup',
        actionId: actionMock.get(EActionKey.TimeBomb).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Maintenance',
        actionId: actionMock.get(EActionKey.FastForward).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Teacher',
    defaultImage: 'https://teacher-default.png',
    skills: [
      {
        name: 'Cancel Class',
        actionId: actionMock.get(EActionKey.Veto).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Pop Quiz',
        actionId: actionMock.get(EActionKey.TimeBomb).id,
        actionMultiplier: 1,
        isInfinite: false,
      },
      {
        name: 'Extra Credit',
        actionId: actionMock.get(EActionKey.GiftTime).id,
        actionMultiplier: 2,
        isInfinite: false,
      },
    ],
  },
];

const werewolfRoleMock: IRoleMock[] = [
  {
    id: uuid(),
    name: 'Werewolf',
    defaultImage: 'https://werewolf-default.png',
    skills: [
      {
        name: 'Kill',
        actionId: actionMock.get(EActionKey.Blank).id,
        actionMultiplier: null,
        isInfinite: true,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Villager',
    defaultImage: 'https://villager-default.png',
    skills: [
      {
        name: 'Vote',
        actionId: actionMock.get(EActionKey.Blank).id,
        actionMultiplier: null,
        isInfinite: true,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Seer',
    defaultImage: 'https://seer-default.png',
    skills: [
      {
        name: 'Vision',
        actionId: actionMock.get(EActionKey.Blank).id,

        actionMultiplier: null,
        isInfinite: true,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Doctor',
    defaultImage: 'https://doctor-default.png',
    skills: [
      {
        name: 'Heal',
        actionId: actionMock.get(EActionKey.Blank).id,
        actionMultiplier: null,
        isInfinite: true,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Hunter',
    defaultImage: 'https://hunter-default.png',
    skills: [
      {
        name: 'Shoot',
        actionId: actionMock.get(EActionKey.Blank).id,
        actionMultiplier: null,
        isInfinite: true,
      },
    ],
  },
];

class RoleMock {
  data: {
    softwareDevelopement: IRoleMock[];
    education: IRoleMock[];
    werewolf: IRoleMock[];
    default: IRoleMock[];
  };

  constructor() {
    this.data = {
      softwareDevelopement: softwareDevelopementRoleMock,
      education: educationRoleMock,
      werewolf: werewolfRoleMock,
      default: softwareDevelopementRoleMock,
    };
  }

  get(
    name:
      | 'Product Owner'
      | 'Backend Developer'
      | 'Frontend Developer'
      | 'DevOps'
      | 'QA'
      | 'Client',
  ): IRoleMock {
    const result = this.data.default.find((role) => role.name === name);

    if (!result) throw new Error(`Role ${name} not found`);

    return result;
  }

  getAllRoles(): IRoleMock[] {
    return ([] as IRoleMock[]).concat(
      this.data.softwareDevelopement,
      this.data.education,
      this.data.werewolf,
    );
  }

  getSoftwareDevelopmentRoles(): IRoleMock[] {
    return this.data.softwareDevelopement;
  }

  getEducationRoles(): IRoleMock[] {
    return this.data.education;
  }

  getWerewolfRoles(): IRoleMock[] {
    return this.data.werewolf;
  }

  getDefaultRoles(): IRoleMock[] {
    return this.data.default;
  }
}

const roleMock = new RoleMock();

export default roleMock;
