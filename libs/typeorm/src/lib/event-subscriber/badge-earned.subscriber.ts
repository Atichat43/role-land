import { Logger } from '@nestjs/common';
import { BadgeEarnedEvent } from '@role-land/domain';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { BadgeEntity } from '../entities/badge.entity';
import { getEventEntityId } from './_helper';

@EventSubscriber()
export class BadgeEarnedSubscriber
  implements EntitySubscriberInterface<BadgeEntity>
{
  listenTo() {
    return BadgeEntity;
  }

  afterInsert(event: InsertEvent<BadgeEntity>) {
    const entityId = getEventEntityId(event);

    const badgeEarnedEvent: BadgeEarnedEvent = {
      type: 'BadgeEarned',
      userId: event.entity.user.id,
      badgeId: entityId,
      entityId,
    };

    Logger.verbose(badgeEarnedEvent);
  }
}
