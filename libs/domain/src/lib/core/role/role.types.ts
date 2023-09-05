import { ITimestampFields } from '../../_base.types';
import { OmitBaseFields } from '../../_shared/types.helper';
import { ITheme } from '../theme';

// --- Skill Template Interface ---
export interface ISkillTemplate {
  name: string;
  actionId: string;
  actionMultiplier: number | null;
  isInfinite: boolean;
}

// --- Role Interface ---
/**
 * @desc Holds the role-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - skills: Array of ISkillTemplate
 * - defaultImage: URL or null
 * - theme: ITheme (ManyToOne)
 * @notes
 * - Roles can be created and updated by users.
 */
export interface IRole extends ITimestampFields {
  id: string;
  name: string;
  skills: ISkillTemplate[];

  defaultImage: string | null;
  theme: ITheme;
}

export type IRoleRaw = Omit<OmitBaseFields<IRole>, 'theme'>;
export type IRoleExcludeSensitive = Omit<IRole, ''>;

export type IRoleMock = Readonly<IRoleRaw>;

// inbound
export type IRoleCreatePayload = Required<IRoleRaw>;
export type IRoleUpdatePayload = Partial<IRoleRaw>;

// outbound
export type IRoleView = Readonly<IRoleExcludeSensitive>;
