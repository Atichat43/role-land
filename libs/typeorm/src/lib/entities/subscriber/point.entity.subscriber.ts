import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PointEntity } from '../aggregates/point.entity';

@EventSubscriber()
export class PointSubscriber implements EntitySubscriberInterface<PointEntity> {
  listenTo() {
    return PointEntity;
  }

  beforeInsert(event: InsertEvent<PointEntity>) {
    // Validate points balance
    if (
      event.entity.balance !==
      event.entity.pointsEarned - event.entity.pointsSpent
    ) {
      console.log('Points balance is inconsistent.');
      // Handle validation error
    }
  }
}
