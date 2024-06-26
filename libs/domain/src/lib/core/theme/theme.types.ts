import { OmitBaseFields } from '../../_shared/types.helper';
import { ITimestampFields } from '../_base.types';
import { IRole } from '../role';
import { EThemeKey } from './theme.enum';

// --- Theme Interface ---
/**
 * @desc Holds the theme-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - key: EThemeKey
 * - premium: Boolean, default false, Indexed
 * - roles: Array of IRole (OneToMany)
 * @notes
 * - Themes can be created and updated by users.
 */
export interface ITheme extends ITimestampFields {
  id: string;
  key: EThemeKey;
  name: string;
  premium: boolean;

  // models
  roles: IRole[];
}

export type IThemeRaw = Omit<OmitBaseFields<ITheme>, 'roles'>;
export type IThemeExcludeSensitive = Omit<ITheme, ''>;

// NOTE: roles should be empty array in mocking process due to circular dependency with role who has theme
export type IThemeMock = Readonly<IThemeRaw & { roles: [] }>;

// inbound
export type IThemeCreatePayload = Required<IThemeRaw>;
export type IThemeUpdatePayload = Partial<IThemeRaw>;

// outbound
export type IThemeView = Readonly<IThemeExcludeSensitive>;
