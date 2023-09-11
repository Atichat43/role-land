import {
  EErrorCategory,
  EErrorResolutionStatus,
  EErrorSeverityLevel,
} from './_enum.error.types';

// --- Basic Information Interface ---
/**
 * @desc Holds the basic information related to the error.
 * @attributes
 * - reportId: UUID
 * - ts: Date, default current date time
 * - userId: UUID or null
 * - sessionId: UUID or null
 */
interface IBasicInfo {
  // Unique identifier for the report
  reportId: string;

  // When the error occurred
  ts: Date;

  // Identifier of the user who experienced the error (Optional)
  userId: string | null;

  // Identifier for the session in which the error occurred (Optional)
  sessionId: string | null;
}

// --- Error Details Interface ---
/**
 * @desc Holds the error details related to the error.
 * @attributes
 * - errCategory: EErrorCategory
 * - errCode: String
 * - errMessage: String
 */
interface IErrorDetails {
  errCategory: EErrorCategory;
  errCode: string;
  errMessage: string;
}

// --- Context Interface ---
/**
 * @desc Holds the context related to the error.
 * @attributes
 * - act: String, non-empty
 * - pageOrScreen: String, non-empty
 * - inputData: Unknown or null
 */
interface IContext {
  // Action Taken: What the user was trying to do when the error occurred
  act: string;

  // Where the error occurred within the application
  pageOrScreen: string;

  // Any data input by the user that could be relevant to the error (Optional)
  inputData: unknown | null;
}

// --- Tech Info Interface ---
/**
 * @desc Holds the technical information related to the error.
 * @attributes
 * - stackTrace: String
 * - apiEndpoints: Array of strings or null
 * - dbQueries: Array of strings or null
 */
interface ITechInfo {
  stackTrace: string;

  // Any API endpoints hit during the occurrence of the error (Optional)
  apiEndpoints: string[] | null;

  // Any database queries executed related to the error (Optional)
  dbQueries: string[] | null;
}

// --- Impact Interface ---
/**
 * @desc Holds the impact related to the error.
 * @attributes
 * - numUsersAffected: Number
 * - severityLvl: EErrorSeverityLevel
 */
interface IImpact {
  // How many users have experienced this error
  numUsersAffected: number;

  // How critical is this error
  severityLvl: EErrorSeverityLevel;
}

// --- Resolution Status Interface ---
/**
 * @desc Holds the resolution status related to the error.
 * @attributes
 * - status: EErrorResolutionStatus
 * - assignedTo: String
 * - eta: Date or null
 */
interface IResolutionStatus {
  status: EErrorResolutionStatus;

  // Who is responsible for fixing this error
  assignedTo: string;

  // ETA for fix
  eta: Date | null;
}

// --- Error Report Interface ---
/**
 * @desc Holds the error report-related domain information.
 * @attributes
 * - basicInfo: IBasicInfo
 * - errDetails: IErrorDetails
 * - ctx: IContext
 * - techInfo: ITechInfo
 * - impact: IImpact
 * - resStatus: IResolutionStatus
 */
export interface ErrorReport {
  basicInfo: IBasicInfo;
  errDetails: IErrorDetails;
  ctx: IContext;
  techInfo: ITechInfo;
  impact: IImpact;
  resStatus: IResolutionStatus;
}
