import { Logger } from '@nestjs/common';
import { AchievementEarnedEvent } from '@role-land/domain';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { AchievementEntity } from '../entities/achievement.entity';
import { getEventEntityId } from './_helper';

@EventSubscriber()
export class AchievementEarnedSubscriber
  implements EntitySubscriberInterface<AchievementEntity>
{
  listenTo() {
    return AchievementEntity;
  }

  afterInsert(event: InsertEvent<AchievementEntity>) {
    const entityId = getEventEntityId(event);

    const achievementEarnedEvent: AchievementEarnedEvent = {
      type: 'AchievementEarned',
      userId: event.entity.user.id,
      achievementId: entityId,
      entityId,
    };
    Logger.verbose(achievementEarnedEvent);
  }
}
