// --- Action Key Enum ---
/**
 * @desc Enum representing action keys.
 * @values
 * - Echo: Repeat the last action
 * - ExtraTime: Add extra time to the timer
 * - FreezeTime: Pause the timer
 * - GiftTime: Give time to the current speaker
 * - StealTime: Take time from the current speaker
 * - TimeCut: Cut time from the current speaker
 * - TimeBomb: Set a time bomb on the current speaker
 * - HotPotato: Pass the current speaker role to another participant
 * - RandomizeOrder: Randomize the speaking order
 * - ReverseOrder: Reverse the speaking order
 * - SkipTurn: Skip the current speaker
 * - SwapRole: Swap the current speaker with another participant
 * - FastForward: Fast forward the current speaker
 * - Hide: Hide the current speaker
 * - InstantReplay: Replay the last speaker
 * - Joker: Joker
 * - MirrorSkill: Mirror skill
 * - PickPocket: Pick pocket
 * - Silencer: Silencer
 * - Veto: Veto
 * - Wildcard: Wildcard
 * - Blank: Blank
 * @default Blank
 * @note Blank is a special action that does nothing
 */
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

// --- Action Type Enum ---
/**
 * @desc Enum representing action types.
 * @values
 * - Timer: Timer actions
 * - Role: Role actions
 * - Ordering: Ordering actions
 * - Strategic: Strategic actions
 */
export enum EActionType {
  Timer = 'timer',
  Role = 'role',
  Ordering = 'order',
  Strategic = 'strategic',
}

// --- Timer Action Operation Enum ---
/**
 * @desc Enum representing timer action operations.
 * @values
 * - Add: Add time to the timer
 * - Subtract: Subtract time from the timer
 * - Pause: Pause the timer
 * - Reset: Reset the timer
 * - Set: Set the timer
 * - Halve: Halve the timer
 */
export enum ETimerActionOperation {
  Add = 'add',
  Subtract = 'subtract',
  Pause = 'pause',
  Reset = 'reset',
  Set = 'set',
  Halve = 'halve',
}

// --- Role Action Operation Enum ---
/**
 * @desc Enum representing role action operations.
 * @values
 * - Swap: Swap the current speaker with another participant
 * - Randomize: Randomize the speaking order
 */
export enum ERoleActionOperation {
  Swap = 'swap',
  Randomize = 'randomize',
}

// --- Ordering Action Operation Enum ---
/**
 * @desc Enum representing ordering action operations.
 * @values
 * - Randomize: Randomize the speaking order
 * - Reverse: Reverse the speaking order
 * - Skip: Skip the current speaker
 */
export enum EOrderingActionOperation {
  Randomize = 'randomize',
  Reverse = 'reverse',
  Skip = 'skip',
}

// --- Strategic Action Operation Enum ---
/**
 * @desc Enum representing strategic action operations.
 * @values
 * - FastForward: Fast forward the current speaker
 * - Hide: Hide the current speaker
 * - InstantReplay: Replay the last speaker
 * - Joker: Joker
 * - MirrorSkill: Mirror skill
 * - PickPocket: Pick pocket
 * - Silencer: Silencer
 * - Veto: Veto
 * - Wildcard: Wildcard
 */
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

// --- Target Enum ---
/**
 * @desc Enum representing targets.
 * @values
 * - NextSpeaker: Targeting the next speaker
 * - PreviousSpeaker: Targeting the previous speaker
 * - CurrentSpeaker: Targeting the current speaker
 * - AllParticipants: Targeting all participants
 * - AllSpeakers: Targeting all speakers
 * - AllListeners: Targeting all listeners
 * - OtherParticipants: Targeting other participants
 * - TargetParticipant: Targeting a specific participant
 * - Self: Targeting self
 * - BackgroundCountdown: Targeting the background countdown (timer)
 * - Custom: Targeting a custom target
 * @note Custom targets are set dynamically
 */
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
