import { ITimestampFields } from './_base.types';

// --- Effect Interface ---
/**
 * @desc Holds the effect-related domain information.
 * @extend ITimestampFields
 * @attributes
 * - id: UUID
 * - name: String, max 25 characters, non-empty
 * - premium: boolean, default false
 */
export interface IEffect extends ITimestampFields {
  id: string;
  name: string;
  premium: boolean;
}
