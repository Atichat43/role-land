import { Logger } from '@nestjs/common';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';

import { UserEntity } from '../user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo() {
    return UserEntity;
  }

  // NOTE: This is a workaround for the fact that TypeORM does not support
  // databaseEntity is undefined for .update() calls
  // https://github.com/typeorm/typeorm/issues/9973
  onPremiumStatusChange(event: UpdateEvent<UserEntity>) {
    const previousValue = event.databaseEntity?.premiumStatus;
    const newValue = event.entity!['premiumStatus'];

    if (previousValue !== undefined && previousValue !== newValue) {
      Logger.debug(
        `User's premium status changed from ${previousValue} to ${newValue}`,
      );
    } else {
      Logger.debug(
        'No change in premium status or previous value is undefined',
        {
          databaseEntity: event.databaseEntity,
          entity: event.entity,
        },
      );
    }
  }

  afterUpdate(event: UpdateEvent<UserEntity>) {
    // this.onPremiumStatusChange(event);
  }
}
