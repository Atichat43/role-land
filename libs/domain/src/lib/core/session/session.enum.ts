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
