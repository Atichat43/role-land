/**
 * SessionStatusEnum
 * - PENDING: Session is pending and has not yet started
 * - STARTED: Session is currently in progress
 * - ENDED: Session has ended
 */
export enum SessionStatusEnum {
  PENDING = 'pending',
  STARTED = 'started',
  ENDED = 'ended',
}

/**
 * RolePreferenceEnum
 * - HIGH: Indicates a high preference for a role
 * - MEDIUM: Indicates a medium preference for a role
 * - LOW: Indicates a low preference for a role
 */
export enum RolePreferenceEnum {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}
