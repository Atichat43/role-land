import { ITimestampFields } from '../../_base.types';
import { OmitBaseFields } from '../../_shared/types.helper';
import {
  EActionKey,
  EActionType,
  EOrderingActionOperation,
  ERoleActionOperation,
  EStrategicActionOperation,
  ETargetEnum,
  ETimerActionOperation,
} from './action.enum';

export interface IBaseActionConfig {
  type: EActionType;
  target: ETargetEnum | null;

  duration: number | null;
  operation:
    | ETimerActionOperation
    | EOrderingActionOperation
    | EStrategicActionOperation
    | ERoleActionOperation;
}

export interface ITimerActionConfig extends IBaseActionConfig {
  type: EActionType.Timer;

  duration: number | null;
  operation: ETimerActionOperation;
}

export interface IOrderingActionConfig extends IBaseActionConfig {
  type: EActionType.Ordering;

  duration: null;
  operation: EOrderingActionOperation;
}

export interface IStrategicActionConfig extends IBaseActionConfig {
  type: EActionType.Strategic;

  duration: null;
  operation: EStrategicActionOperation;
}

export interface IRoleActionConfig extends IBaseActionConfig {
  type: EActionType.Role;

  duration: null;
  operation: ERoleActionOperation;
}

// --- Action Interface ---
/**
 * @desc Holds the action-related domain information.
 * @attributes
 * - id: UUID
 * - key: EActionKey
 * - name: String, max 25 characters, non-empty
 * - des: String, max 100 characters, non-empty
 * - isBaseAction: boolean
 * - config: Array of IActionConfig
 * - longDesc: String, max 1000 characters, can be empty
 * @notes
 * - Actions are created and updated by admins.
 * - Actions are used to create skills.
 */
export interface IAction extends ITimestampFields {
  id: string;
  key: EActionKey;
  name: string;
  des: string;
  isBaseAction: boolean;
  config:
    | (
        | ITimerActionConfig
        | IOrderingActionConfig
        | IStrategicActionConfig
        | IRoleActionConfig
      )[]
    | null;

  longDesc: string | null;
}

export type IActionRaw = OmitBaseFields<IAction>;
export type IActionExcludeSensitive = Omit<IAction, ''>;

export type IActionMock = Readonly<IActionRaw>;

// inbound
export type IActionCreatePayload = Required<IActionRaw>;
export type IActionUpdatePayload = Partial<IActionRaw>;

// outbound
export type IActionView = Readonly<IActionExcludeSensitive>;
