/* eslint-disable @typescript-eslint/no-explicit-any */
import { InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';

type Event<T> = InsertEvent<T> | RemoveEvent<T> | UpdateEvent<T>;

export const getEventEntityId = (
  event: Event<any>,
  defaultVale = 'no-entity-id-lib-issue',
): string => {
  if ('entityId' in event) {
    return event.entityId || defaultVale;
  }

  return event.entity?.['id'] || defaultVale;
};
