export enum EActionKey {
  Echo = 'echo',
  ExtraTime = 'extra_time',
  FreezeTime = 'freeze_time',
  GiftTime = 'gift_time',
  StealTime = 'steal_time',
  TimeCut = 'time_cut',
  TimeBomb = 'time_bomb',
  HotPotato = 'hot_potato',
  RandomizeOrder = 'randomize_order',
  ReverseOrder = 'reverse_order',
  SkipTurn = 'skip_turn',
  SwapRole = 'swap_role',
  FastForward = 'fast_forward',
  Hide = 'hide',
  InstantReplay = 'instant_replay',
  Joker = 'joker',
  MirrorSkill = 'mirror_skill',
  PickPocket = 'pick_pocket',
  Silencer = 'silencer',
  Veto = 'veto',
  Wildcard = 'wildcard',
  Blank = 'blank',
}

export enum EActionType {
  Timer = 'timer',
  Role = 'role',
  Ordering = 'order',
  Strategic = 'strategic',
}

export enum ETimerActionOperation {
  Add = 'add',
  Subtract = 'subtract',
  Pause = 'pause',
  Reset = 'reset',
  Set = 'set',
  Halve = 'halve',
}

export enum ERoleActionOperation {
  Swap = 'swap',
  Randomize = 'randomize',
}

export enum EOrderingActionOperation {
  Randomize = 'randomize',
  Reverse = 'reverse',
  Skip = 'skip',
}

export enum EStrategicActionOperation {
  FastForward = 'fast_forward',
  Hide = 'hide',
  InstantReplay = 'instant_replay',
  Joker = 'joker',
  MirrorSkill = 'mirror_skill',
  PickPocket = 'pick_pocket',
  Silencer = 'silencer',
  Veto = 'veto',
  Wildcard = 'wildcard',
}

export enum ETargetEnum {
  // Targeting Speaker
  NextSpeaker = 'next_speaker',
  PreviousSpeaker = 'previous_speaker',
  CurrentSpeaker = 'current_speaker',

  // Targeting groups
  AllParticipants = 'all_participants',
  AllSpeakers = 'all_speakers',
  AllListeners = 'all_listeners',
  OtherParticipants = 'other_participants',

  // Targeting participants
  TargetParticipant = 'target_participant',
  Self = 'self',

  // Custom or external targets (could be set dynamically)
  BackgroundCountdown = 'background_countdown',
  Custom = 'custom',
}
