/**
 * Base event interface
 * - type: string, *non-empty*
 * - entityId: string, *non-empty*
 */
export interface BaseEvent {
  type: string;
  entityId: string;
}
