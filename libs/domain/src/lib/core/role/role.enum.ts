// --- Role Key Structuring Convention ---
/**
 * @desc Role keys adhere to a structured convention: "team_key:theme_key:role_key".
 * This convention ensures:
 * - Consistent identification of roles across various teams and themes.
 * - Hierarchical representation, facilitating easier categorization and lookup.
 * - Enhanced maintainability and scalability for future role additions.
 *
 * @example
 * For a Product Owner role in the Software Development team, the key is:
 * "role_land:sd:product_owner"
 */

// --- Software Development Role Key Enum ---
/**
 * @desc Enum representing the role keys specific to the software development theme.
 * @values
 * - ProductOwner: Role key for the product owner.
 * - BackendDeveloper: Role key for the backend developer.
 * - FrontendDeveloper: Role key for the frontend developer.
 * - DevOps: Role key for the DevOps role.
 * - QA: Role key for the quality assurance role.
 * - Client: Role key for the client role.
 */
export enum ESoftwareDevelopmentRoleKey {
  ProductOwner = 'role_land:sd:product_owner',
  BackendDeveloper = 'role_land:sd:backend_developer',
  FrontendDeveloper = 'role_land:sd:frontend_developer',
  DevOps = 'role_land:sd:dev_ops',
  QA = 'role_land:sd:qa',
  Client = 'role_land:sd:client',
}

// --- Education Role Key Enum ---
/**
 * @desc Enum representing the role keys specific to the education theme.
 * @values
 * - Principal: Role key for the principal.
 * - Teacher: Role key for the teacher.
 * - Student: Role key for the student.
 * - SchoolNurse: Role key for the school nurse.
 * - JanitorialStaff: Role key for the janitorial staff.
 */
export enum EEducationRoleKey {
  Principal = 'role_land:edu:principal',
  Teacher = 'role_land:edu:teacher',
  Student = 'role_land:edu:student',
  SchoolNurse = 'role_land:edu:school_nurse',
  JanitorialStaff = 'role_land:edu:janitorial_staff',
}

// --- Werewolf Role Key Enum ---
/**
 * @desc Enum representing the role keys specific to the werewolf theme.
 * @values
 * - Werewolf: Role key for the werewolf.
 * - Villager: Role key for the villager.
 * - Seer: Role key for the seer.
 * - Doctor: Role key for the doctor.
 * - Hunter: Role key for the hunter.
 */
export enum EWerewolfRoleKey {
  Werewolf = 'role_land:werewolf:werewolf',
  Villager = 'role_land:werewolf:villager',
  Seer = 'role_land:werewolf:seer',
  Doctor = 'role_land:werewolf:doctor',
  Hunter = 'role_land:werewolf:hunter',
}

// --- Role Key Type ---
/**
 * @desc Type combining all the role keys from different themes.
 * It includes role keys from software development, education, and werewolf themes.
 */
export type ERoleKey =
  | ESoftwareDevelopmentRoleKey
  | EEducationRoleKey
  | EWerewolfRoleKey;
