import { Logger } from '@nestjs/common';
import { IUserPointsChangedEvent } from '@role-land/domain';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';

import { PointEntity } from '../entities/point.entity';
import { getEventEntityId } from './_helper';

@EventSubscriber()
export class UserPointsChangedSubscriber
  implements EntitySubscriberInterface<PointEntity>
{
  listenTo() {
    return PointEntity;
  }

  afterUpdate(event: UpdateEvent<PointEntity>) {
    const entityId = getEventEntityId(event);

    if (event.entity?.['pointsEarned'] !== event.databaseEntity?.pointsEarned) {
      const pointsEarnedEvent: IUserPointsChangedEvent = {
        type: 'PointsEarned',
        userId: event.entity?.['user'].id,
        points: event.entity?.['pointsEarned'],
        entityId,
      };
      Logger.verbose(pointsEarnedEvent);
    }

    if (event.entity?.['pointsSpent'] !== event.databaseEntity?.pointsSpent) {
      const pointsSpentEvent: IUserPointsChangedEvent = {
        type: 'PointsSpent',
        userId: event.entity?.['user'].id,
        points: event.entity?.['pointsSpent'],
        entityId,
      };
      Logger.verbose(pointsSpentEvent);
    }
  }
}
