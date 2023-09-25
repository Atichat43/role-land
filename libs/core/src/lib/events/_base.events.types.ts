// --- Base Event Interface ---
/**
 * @desc Holds the base event-related domain information.
 * @attributes
 * - type: String, non-empty
 * - entityId: String, non-empty
 */
export interface IBaseEvent {
  type: string;
  entityId: string;
}
