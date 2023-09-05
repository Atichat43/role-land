import { ITimestampFields } from '../../_base.types';
import { OmitBaseFields } from '../../_shared/types.helper';
import { IRole, IRoleMock } from '../role';

// --- Theme Interface ---
/**
 * @desc Holds the theme-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - premium: Boolean, default false, Indexed
 * - roles: Array of IRole (OneToMany)
 * @notes
 * - Themes can be created and updated by users.
 */
export interface ITheme extends ITimestampFields {
  id: string;
  name: string;
  premium: boolean;

  // models
  roles: IRole[];
}

export type IThemeRaw = Omit<OmitBaseFields<ITheme>, 'roles'>;
export type IThemeExcludeSensitive = Omit<ITheme, ''>;

export type IThemeMock = Readonly<IThemeRaw & { roles: IRoleMock[] }>;

// inbound
export type IThemeCreatePayload = Required<IThemeRaw>;
export type IThemeUpdatePayload = Partial<IThemeRaw>;

// outbound
export type IThemeView = Readonly<IThemeExcludeSensitive>;
