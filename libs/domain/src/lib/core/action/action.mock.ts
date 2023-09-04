import {
  EActionKey,
  EActionType,
  EOrderingActionOperation,
  ERoleActionOperation,
  EStrategicActionOperation,
  ETargetEnum,
  ETimerActionOperation,
} from './action.enum';
import { IActionMock } from './action.types';

const actionSeedData: IActionMock[] = [
  {
    name: 'Echo',
    des: 'Allows the current speaker to speak again immediately after their turn ends.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.Echo,
    config: [
      {
        type: EActionType.Timer,
        duration: null,
        operation: ETimerActionOperation.Reset,
        target: ETargetEnum.CurrentSpeaker,
      },
    ],
  },
  {
    name: 'Extra Time',
    des: 'Adds an extra 30 seconds to your speaking time.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.ExtraTime,
    config: [
      {
        type: EActionType.Timer,
        duration: 30,
        operation: ETimerActionOperation.Add,
        target: ETargetEnum.Self,
      },
    ],
  },
  {
    name: 'Freeze Time',
    des: 'Pauses the timer for 5 minutes.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.FreezeTime,
    config: [
      {
        type: EActionType.Timer,
        duration: 300,
        operation: ETimerActionOperation.Pause,
        target: ETargetEnum.AllParticipants,
      },
    ],
  },
  {
    name: 'Gift Time',
    des: 'Gives 15 seconds to current speaker.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.GiftTime,

    config: [
      {
        type: EActionType.Timer,
        duration: 15,
        operation: ETimerActionOperation.Add,
        target: ETargetEnum.CurrentSpeaker,
      },
    ],
  },
  {
    name: 'Steal Time',
    des: "Steals 15 seconds from another participants's speaking time.",
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.StealTime,
    config: [
      {
        type: EActionType.Timer,
        duration: 15,
        operation: ETimerActionOperation.Subtract,
        target: ETargetEnum.TargetParticipant,
      },
      {
        type: EActionType.Timer,
        duration: 15,
        operation: ETimerActionOperation.Add,
        target: ETargetEnum.Self,
      },
    ],
  },
  {
    name: 'Time Cut',
    des: "Cut the next person's speaking time by half.",
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.TimeCut,
    config: [
      {
        type: EActionType.Timer,
        duration: null,
        operation: ETimerActionOperation.Halve,
        target: ETargetEnum.NextSpeaker,
      },
    ],
  },
  {
    name: 'Time Bomb',
    des: 'Set a timer for 1 minute; random role, random order.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.TimeBomb,
    config: [
      {
        type: EActionType.Timer,
        duration: 60,
        operation: ETimerActionOperation.Set,
        target: ETargetEnum.BackgroundCountdown,
      },
      {
        type: EActionType.Ordering,
        duration: null,
        operation: EOrderingActionOperation.Randomize,
        target: ETargetEnum.AllParticipants,
      },
      {
        type: EActionType.Role,
        duration: null,
        operation: ERoleActionOperation.Randomize,
        target: ETargetEnum.AllParticipants,
      },
    ],
  },
  {
    name: 'Hot Potato',
    des: 'The current speaker must immediately stop, and a new random speaker is chosen.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.HotPotato,
    config: [
      {
        type: EActionType.Timer,
        duration: 0,
        operation: ETimerActionOperation.Set,
        target: ETargetEnum.CurrentSpeaker,
      },
      {
        type: EActionType.Ordering,
        duration: null,
        operation: EOrderingActionOperation.Randomize,
        target: ETargetEnum.CurrentSpeaker,
      },
    ],
  },
  {
    name: 'Randomize',
    des: 'Shuffle the speaking order.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.RandomizeOrder,
    config: [
      {
        type: EActionType.Ordering,
        duration: null,
        operation: EOrderingActionOperation.Randomize,
        target: ETargetEnum.AllParticipants,
      },
    ],
  },
  {
    name: 'Reverse',
    des: 'Reverses the order of speaking.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.ReverseOrder,
    config: [
      {
        type: EActionType.Ordering,
        duration: null,
        operation: EOrderingActionOperation.Reverse,
        target: ETargetEnum.AllParticipants,
      },
    ],
  },
  {
    name: 'Skip',
    des: 'Skip your turn and pass it to the next person.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.SkipTurn,
    config: [
      {
        type: EActionType.Ordering,
        duration: null,
        operation: EOrderingActionOperation.Skip,
        target: ETargetEnum.Self,
      },
    ],
  },
  {
    name: 'Swap',
    des: 'Swap roles with another participant.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.SwapRole,
    config: [
      {
        type: EActionType.Role,
        duration: null,
        operation: ERoleActionOperation.Swap,
        target: ETargetEnum.TargetParticipant,
      },
    ],
  },
  {
    name: 'Fast Forward',
    des: 'Skip your turn, ignoring any actions in between.',
    longDesc:
      "If the first person uses this action, the next four people cannot use any actions until it's the first person's turn again.",
    isBaseAction: false,
    key: EActionKey.FastForward,
    config: [
      {
        type: EActionType.Ordering,
        duration: null,
        operation: EOrderingActionOperation.Skip,
        target: ETargetEnum.Self,
      },
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.FastForward,
        target: ETargetEnum.AllParticipants,
      },
    ],
  },
  {
    name: 'Hide',
    des: 'Become invisible; your turn is skipped without notice.',
    longDesc:
      "The user becomes invisible on the web application interface until it's their turn again.",
    isBaseAction: false,
    key: EActionKey.Hide,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.Hide,
        target: ETargetEnum.Self,
      },
    ],
  },
  {
    name: 'Instant Replay',
    des: 'Repeats the last 30 seconds of discussion.',
    longDesc:
      'The current speaker receives extra time, separate from their current time.',
    isBaseAction: false,
    key: EActionKey.InstantReplay,
    config: [
      {
        type: EActionType.Timer,
        duration: 30,
        operation: ETimerActionOperation.Add,
        target: ETargetEnum.CurrentSpeaker,
      },
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.InstantReplay,
        target: ETargetEnum.CurrentSpeaker,
      },
    ],
  },
  {
    name: 'Joker',
    des: 'Introduce a new, random topic to the discussion.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.Joker,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.Joker,
        target: null,
      },
    ],
  },
  {
    name: 'Mirror',
    des: 'Copy the last skill used by another participant.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.MirrorSkill,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.MirrorSkill,
        target: ETargetEnum.Custom,
      },
    ],
  },
  {
    name: 'Pick Pocket',
    des: 'Steal a random skill from another participant.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.PickPocket,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.PickPocket,
        target: ETargetEnum.OtherParticipants,
      },
    ],
  },
  {
    name: 'Silencer',
    des: "Skip the target's next turn.",
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.Silencer,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.Silencer,
        target: ETargetEnum.TargetParticipant,
      },
    ],
  },
  {
    name: 'Veto',
    des: 'Cancel another player’s action.',
    longDesc: null,
    isBaseAction: true,
    key: EActionKey.Veto,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.Veto,
        target: ETargetEnum.Custom,
      },
    ],
  },
  {
    name: 'Wildcard',
    des: 'Choose any skills to use immediately.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.Wildcard,
    config: [
      {
        type: EActionType.Strategic,
        duration: null,
        operation: EStrategicActionOperation.Wildcard,
        target: ETargetEnum.AllParticipants,
      },
    ],
  },
  {
    name: 'Blank',
    des: 'Do nothing.',
    longDesc: null,
    isBaseAction: false,
    key: EActionKey.Blank,
    config: [],
  },
];

export default actionSeedData;
