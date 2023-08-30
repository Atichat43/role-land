/**
 * BasicInformation Interface
 * - reportId: UUID
 * - ts: Date *(default: current date time)*
 * - userId: UUID **can be empty**
 * - sessionId: UUID **can be empty**
 */
interface BasicInfo {
  // Unique identifier for the report
  reportId: string;

  // When the error occurred
  ts: Date;

  // Identifier of the user who experienced the error (Optional)
  userId: string | null;

  // Identifier for the session in which the error occurred (Optional)
  sessionId: string | null;
}

/**
 * ErrorDetails Interface
 * - errCategory: 'BE' | 'FE' | 'DB'
 * - errCode: string
 * - errMessage: string
 */
interface ErrorDetails {
  // Error Category: Backend, Frontend, Database
  errCategory: 'BE' | 'FE' | 'DB';
  errCode: string;
  errMessage: string;
}

/**
 * Context Interface
 * - act: string
 * - pageOrScreen: string
 * - inputData: unknown | null
 */
interface Context {
  // Action Taken: What the user was trying to do when the error occurred
  act: string;

  // Where the error occurred within the application
  pageOrScreen: string;

  // Any data input by the user that could be relevant to the error (Optional)
  inputData: unknown | null;
}

/**
 * TechInfo Interface
 * - stackTrace: string
 * - apiEndpoints: string[] | null
 * - dbQueries: string[] | null
 */
interface TechInfo {
  stackTrace: string;

  // Any API endpoints hit during the occurrence of the error (Optional)
  apiEndpoints: string[] | null;

  // Any database queries executed related to the error (Optional)
  dbQueries: string[] | null;
}

/**
 * Impact Interface
 * - numUsersAffected: number
 * - severityLvl: 'Low' | 'Medium' | 'High'
 */
interface Impact {
  // How many users have experienced this error
  numUsersAffected: number;

  // How critical is this error
  severityLvl: 'Low' | 'Medium' | 'High';
}

/**
 * ResolutionStatus Interface
 * - status: 'Resolved' | 'Pending' | 'Under Investigation'
 * - assignedTo: string
 * - eta: Date | null
 */
interface ResolutionStatus {
  // Is the error resolved, pending, or under investigation?
  status: 'Resolved' | 'Pending' | 'Under Investigation';

  // Who is responsible for fixing this error
  assignedTo: string;

  // ETA for fix
  eta: Date | null;
}

export interface ErrorReport {
  basicInfo: BasicInfo;
  errDetails: ErrorDetails;
  ctx: Context;
  techInfo: TechInfo;
  impact: Impact;
  resStatus: ResolutionStatus;
}
