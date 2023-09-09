import { ISoftDeletionFields, ITimestampFields } from '../../_base.types';
import { ITeamMember } from '../../aggregates.types';
import { IBadge } from '../../models.types';
import { IProfile, IRolePreference } from '../../value-objects.types';
import { IUserAchievement } from '../user-achievement';

// --- User Interface ---
/**
 * @desc Holds the user-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 *  - id: UUID
 *  - username: String, max 25 characters, non-empty
 *  - globalName: String, max 25 characters, non-empty
 *  - avatar: URL or null
 *  - premiumStatus: Boolean, default false
 *  - profile: IProfile (Value Object)
 *  - rolePreferences: Array of IRolePreference (Value Object)
 *  - badges: Array of IBadge (OneToMany)
 *  - userAchievements: Array of IUserAchievement (OneToMany)
 *  - teamMemberships: Array of ITeamMember (OneToMany)
 * @notes
 * - Utilizes soft delete for analyzing user trends and maintaining historical data.
 * -
 */
export interface IUser extends ITimestampFields, ISoftDeletionFields {
  id: string;
  username: string;
  globalName: string;
  premiumStatus: boolean;
  avatar: string | null;

  // value objects
  profile: IProfile;
  rolePreferences: IRolePreference[];

  // models
  badges: IBadge[];
  userAchievements: IUserAchievement[];

  // aggregates
  teamMemberships: ITeamMember[];
}
