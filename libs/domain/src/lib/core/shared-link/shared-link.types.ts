import { OmitBaseFields } from '../../_shared/types.helper';
import { ITimestampFields } from '../_base.types';

/**
 * @desc Holds the shared link-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - url: URL, unique, indexed
 * - isActive: boolean, default false
 */
export interface ISharedLink extends ITimestampFields {
  id: string;
  url: string;
  isActive: boolean;
}

export type ISharedLinkRaw = Omit<OmitBaseFields<ISharedLink>, ''>;
export type ISharedLinkExcludeSensitive = Omit<ISharedLink, ''>;

export type ISharedLinkMock = Readonly<ISharedLinkRaw>;

// inbound
export type ISharedLinkCreatePayload = Required<ISharedLinkRaw>;
export type ISharedLinkUpdatePayload = Partial<ISharedLinkRaw>;

// outbound
export type ISharedLinkView = Readonly<ISharedLinkExcludeSensitive>;
