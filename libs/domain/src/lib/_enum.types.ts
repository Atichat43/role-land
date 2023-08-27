/**
 * SessionStatusEnum
 * - PENDING: Session is pending and has not yet started
 * - STARTED: Session is currently in progress
 * - ENDED: Session has ended
 * ---
 * `default: PENDING`
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

/**
 * TeamMemberMembershipStateEnum
 * - INVITED: Indicates that the user has been invited to the team
 * - ACCEPTED: Indicates that the user has accepted the invitation to the team
 */
export enum TeamMemberMembershipStateEnum {
  INVITED = 'invited',
  ACCEPTED = 'accepted',
}
