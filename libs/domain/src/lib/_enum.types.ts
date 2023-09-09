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
