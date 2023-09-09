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

// --- Role Key Enum ---
/**
 * @desc Enum representing the keys of all available roles.
 * @values
 * - ProductOwner: Role key for the product owner.
 * - BackendDeveloper: Role key for the backend developer.
 * - FrontendDeveloper: Role key for the frontend developer.
 * - DevOps: Role key for the DevOps role.
 * - QA: Role key for the quality assurance role.
 * - Client: Role key for the client role.
 * - Principal: Role key for the principal.
 * - Teacher: Role key for the teacher.
 * - Student: Role key for the student.
 * - SchoolNurse: Role key for the school nurse.
 * - JanitorialStaff: Role key for the janitorial staff.
 * - Werewolf: Role key for the werewolf.
 * - Villager: Role key for the villager.
 * - Seer: Role key for the seer.
 * - Doctor: Role key for the doctor.
 * - Hunter: Role key for the hunter.
 */
export enum ERoleKey {
  // softwareDevelopment
  SdProductOwner = 'role_land:sd:product_owner',
  SdBackendDeveloper = 'role_land:sd:backend_developer',
  SdFrontendDeveloper = 'role_land:sd:frontend_developer',
  SdDevOps = 'role_land:sd:dev_ops',
  SdQA = 'role_land:sd:qa',
  SdClient = 'role_land:sd:client',

  // education
  EduPrincipal = 'role_land:edu:principal',
  EduTeacher = 'role_land:edu:teacher',
  EduStudent = 'role_land:edu:student',
  EduSchoolNurse = 'role_land:edu:school_nurse',
  EduJanitorialStaff = 'role_land:edu:janitorial_staff',

  // werewolf
  WerewolfWerewolf = 'role_land:werewolf:werewolf',
  WerewolfVillager = 'role_land:werewolf:villager',
  WerewolfSeer = 'role_land:werewolf:seer',
  WerewolfDoctor = 'role_land:werewolf:doctor',
  WerewolfHunter = 'role_land:werewolf:hunter',
}
