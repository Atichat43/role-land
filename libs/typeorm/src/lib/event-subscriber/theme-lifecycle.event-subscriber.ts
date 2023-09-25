import { Logger } from '@nestjs/common';
import { IThemeLifecycleEvent } from '@role-land/core';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';

import { ThemeEntity } from '../entities/theme.entity';
import { getEventEntityId } from './_helper';

@EventSubscriber()
export class ThemeLifecycleSubscriber
  implements EntitySubscriberInterface<ThemeEntity>
{
  listenTo() {
    return ThemeEntity;
  }

  afterInsert(event: InsertEvent<ThemeEntity>) {
    const entityId = getEventEntityId(event);

    const themeCreatedEvent: IThemeLifecycleEvent = {
      type: 'ThemeCreated',
      themeId: entityId,
      entityId,
    };
    Logger.verbose(themeCreatedEvent);
  }

  afterUpdate(event: UpdateEvent<ThemeEntity>) {
    const entityId = getEventEntityId(event);

    const themeUpdatedEvent: IThemeLifecycleEvent = {
      type: 'ThemeUpdated',
      themeId: entityId,
      entityId,
    };
    Logger.verbose(themeUpdatedEvent);
  }

  afterRemove(event: RemoveEvent<ThemeEntity>) {
    const entityId = getEventEntityId(event);

    const themeDeletedEvent: IThemeLifecycleEvent = {
      type: 'ThemeDeleted',
      themeId: entityId,
      entityId,
    };
    Logger.verbose(themeDeletedEvent);
  }
}
