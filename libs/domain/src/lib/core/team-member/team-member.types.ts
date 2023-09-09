import { ITimestampFields } from '../../_base.types';
import { OmitBaseFields } from '../../_shared/types.helper';
import { ITeam } from '../../aggregates.types';
import { IUser } from '../user';
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

export type ITeamMemberMock = Readonly<ITeamMemberRaw>;

// inbound
export type ITeamMemberCreatePayload = Required<ITeamMemberRaw>;
export type ITeamMemberUpdatePayload = Partial<ITeamMemberRaw>;

// outbound
export type ITeamMemberView = Readonly<ITeamMemberExcludeSensitive>;
