import { ISoftDeletionFields, ITimestampFields } from '../../_base.types';
import { OmitBaseFields } from '../../_shared/types.helper';
import { IRole, IRoleMock } from '../role';
import { ISharedLink, ISharedLinkMock } from '../shared-link';
import { ITheme, IThemeMock } from '../theme';
import { IUser, IUserMock } from '../user';
import { ESessionStatus } from './session.enum';

/**
 * @desc Holds the session-related domain information.
 * @extend ITimestampFields, ISoftDeletionFields
 * @attributes
 * - id: UUID
 * - status: ESessionStatus, default PENDING , Indexed
 * - sharedLink: ISharedLink (OneToOne)
 * - theme: ITheme (OneToOne)
 * - rolesAvailable: Array of IRole (ManyToMany)
 * - participants: Array of IUser (ManyToMany)
 * @notes
 * - Utilizes soft delete for analyzing past sessions (important interactions or events).
 */
export interface ISession extends ITimestampFields, ISoftDeletionFields {
  id: string;
  status: ESessionStatus;

  // models
  sharedLink: ISharedLink;
  theme: ITheme;

  // aggregates

  // Dynamic Role Selection: If the roles available for a session can change based on the session's theme, participants, or other factors, then having rolesAvailable can be useful.
  // It provides a clear list of roles that participants can choose from or be assigned to during that session.
  rolesAvailable: IRole[];
  participants: IUser[];
}

export type ISessionRaw = Omit<
  OmitBaseFields<ISession>,
  'sharedLink' | 'theme' | 'rolesAvailable' | 'participants'
>;
export type ISessionExcludeSensitive = Omit<ISession, ''>;

export type ISessionMock = Readonly<
  ISessionRaw & {
    sharedLink: ISharedLinkMock;
    theme: IThemeMock;
    rolesAvailable: IRoleMock[];
    participants: IUserMock[];
  }
>;

// inbound
export type ISessionCreatePayload = Required<ISessionRaw>;
export type ISessionUpdatePayload = Partial<ISessionRaw>;

// outbound
export type ISessionView = Readonly<ISessionExcludeSensitive>;
