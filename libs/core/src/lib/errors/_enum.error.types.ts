// --- Error Category Enum ---
/**
 * @desc Enum representing error categories.
 * @values
 * - BE: Backend
 * - FE: Frontend
 * - DB: Database
 */
export enum EErrorCategory {
  BE = 'BE',
  FE = 'FE',
  DB = 'DB',
}

// --- Error Severity Level Enum ---
/**
 * @desc Enum representing error severity levels.
 * @values
 * - LOW: Low severity
 * - MEDIUM: Medium severity
 * - HIGH: High severity
 */
export enum EErrorSeverityLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

// --- Error Resolution Status Enum ---
/**
 * @desc Enum representing error resolution statuses.
 * @values
 * - RESOLVED: Error has been resolved
 * - PENDING: Error is pending resolution
 * - UNDER_INVESTIGATION: Error is under investigation
 * @default PENDING
 */
export enum EErrorResolutionStatus {
  RESOLVED = 'Resolved',
  PENDING = 'Pending',
  UNDER_INVESTIGATION = 'Under Investigation',
}
