import { OmitBaseFields } from '../../_shared/types.helper';
import { ISoftDeletionFields, ITimestampFields } from '../_base.types';
import { ITeamMember } from '../team-member';
import { IUser, IUserMock } from '../user';

// --- Team Interface ---
/**
 * @desc Holds the team-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - icon: URL or null
 * - owner: IUser (ManyToOne)
 * - members: Array of ITeamMember (OneToMany)
 */
export interface ITeam extends ITimestampFields, ISoftDeletionFields {
  id: string;

  name: string;
  icon: string | null;

  // aggregates
  owner: IUser;
  members: ITeamMember[];
}

export type ITeamRaw = Omit<OmitBaseFields<ITeam>, 'owner' | 'members'>;
export type ITeamExcludeSensitive = Omit<ITeam, ''>;

// NOTE: roles should be empty array in mocking process due to circular dependency with role who has Team
export type ITeamMock = Readonly<ITeamRaw & { owner: IUserMock }>;

// inbound
export type ITeamCreatePayload = Required<ITeamRaw>;
export type ITeamUpdatePayload = Partial<ITeamRaw>;

// outbound
export type ITeamView = Readonly<ITeamExcludeSensitive>;
