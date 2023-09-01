// --- Session Status Enum ---
/**
 * @desc Enum representing session statuses.
 * @values
 *  - PENDING: Session is pending and has not yet started
 *  - STARTED: Session is currently in progress
 *  - ENDED: Session has ended
 * @default PENDING
 */
export enum ESessionStatus {
  PENDING = 'pending',
  STARTED = 'started',
  ENDED = 'ended',
}

// --- Role Preference Enum ---
/**
 * @desc Enum representing role preferences.
 * @values
 *  - HIGH: Indicates a high preference for a role
 *  - MEDIUM: Indicates a medium preference for a role
 *  - LOW: Indicates a low preference for a role
 */
export enum ERolePreference {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

// --- Team Member Membership State Enum ---
/**
 * @desc Enum representing team member membership states.
 * @values
 *  - INVITED: Indicates that the user has been invited to the team
 *  - ACCEPTED: Indicates that the user has accepted the invitation to the team
 */
export enum ETeamMemberMembershipState {
  INVITED = 'invited',
  ACCEPTED = 'accepted',
}
