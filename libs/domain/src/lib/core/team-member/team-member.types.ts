import { OmitBaseFields } from '../../_shared/types.helper';
import { ITimestampFields } from '../_base.types';
import { ITeam, ITeamMock } from '../team';
import { IUser, IUserMock } from '../user';
import { ETeamMemberMembershipState } from './team-member.enum';

// --- Team Member Interface ---
/**
 * @desc Holds the team member-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - teamMemberMembershipState: ETeamMemberMembershipState
 * - permissions: Array of strings
 * - user: IUser (ManyToOne)
 * - team: ITeam (ManyToOne)
 */
export interface ITeamMember extends ITimestampFields {
  id: string;
  teamMemberMembershipState: ETeamMemberMembershipState;
  permissions: string[];

  // aggregates
  user: IUser;
  team: ITeam;
}

export type ITeamMemberRaw = Omit<OmitBaseFields<ITeamMember>, 'user' | 'team'>;
export type ITeamMemberExcludeSensitive = Omit<ITeamMember, ''>;

export type ITeamMemberMock = Readonly<
  ITeamMemberRaw & { user: IUserMock; team: ITeamMock }
>;

// inbound
export type ITeamMemberCreatePayload = Required<ITeamMemberRaw>;
export type ITeamMemberUpdatePayload = Partial<ITeamMemberRaw>;

// outbound
export type ITeamMemberView = Readonly<ITeamMemberExcludeSensitive>;
