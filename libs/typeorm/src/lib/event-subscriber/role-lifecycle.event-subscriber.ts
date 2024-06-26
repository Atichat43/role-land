import { Logger } from '@nestjs/common';
import { IRoleLifecycleEvent } from '@role-land/domain';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { RoleEntity } from '../entities/role.entity';
import { getEventEntityId } from './_helper';

@EventSubscriber()
export class RoleLifecycleSubscriber
  implements EntitySubscriberInterface<RoleEntity>
{
  listenTo() {
    return RoleEntity;
  }

  afterInsert(event: InsertEvent<RoleEntity>) {
    const entityId = getEventEntityId(event);

    const roleCreatedEvent: IRoleLifecycleEvent = {
      type: 'RoleCreated',
      roleId: event.entity.id,
      entityId,
    };

    Logger.verbose(roleCreatedEvent);
  }

  // NOTE: event.entityId is undefined for some reason
  afterRemove(event: RemoveEvent<RoleEntity>) {
    const entityId = getEventEntityId(event);

    const roleDeletedEvent: IRoleLifecycleEvent = {
      type: 'RoleDeleted',
      roleId: entityId,
      entityId,
    };

    Logger.verbose(roleDeletedEvent);
  }
}
