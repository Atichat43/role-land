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
}

export interface ITimerActionConfig extends IBaseActionConfig {
  duration: number | null;
  operation: ETimerActionOperation;
}

export interface IOrderingActionConfig extends IBaseActionConfig {
  operation: EOrderingActionOperation;
}

export interface IStrategicActionConfig extends IBaseActionConfig {
  operation: EStrategicActionOperation;
}

export interface IRoleActionConfig extends IBaseActionConfig {
  operation: ERoleActionOperation;
}

export type IActionConfig =
  | ITimerActionConfig
  | IOrderingActionConfig
  | IStrategicActionConfig
  | IRoleActionConfig;

export interface IAction {
  id: string;
  key: EActionKey;
  name: string;
  des: string;
  isBaseAction: boolean;
  config: IActionConfig[];

  longDesc?: string;
}
