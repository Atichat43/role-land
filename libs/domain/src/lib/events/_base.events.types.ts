/**
 * Base event interface
 * - type: string, *non-empty*
 * - entityId: string, *non-empty*
 */
export interface IBaseEvent {
  type: string;
  entityId: string;
}
