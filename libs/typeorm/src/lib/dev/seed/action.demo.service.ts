import { InjectRepository } from '@nestjs/typeorm';
import { EActionKey, IActionCreatePayload } from '@role-land/domain';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { ActionEntity } from '../../entities';

export class ActionDemoUserStoriesService {
  createActionPayload: IActionCreatePayload;

  constructor(
    @InjectRepository(ActionEntity)
    private readonly actionRepository: Repository<ActionEntity>,
  ) {
    this.createActionPayload = {
      id: uuid(),
      key: EActionKey.Blank,
      name: 'Blank (demo) 3',
      des: 'Blank (demo)',
      longDesc: null,
      isBaseAction: false,
      config: null,
    };
  }

  async execute() {
    const temp = this.actionRepository.save({
      somethigelse: 1,
    } as any);
    console.log(temp);
    await this.createNewAction();
    // await this.updateExistingAction();
    // await this.viewListOfActions();
  }

  // Admin Stories
  // As an admin, I want to create a new Action so that it can be used in various roles and themes.
  async createNewAction() {
    // const action = this.actionRepository.create(this.createActionPayload);
    await this.actionRepository.save(this.createActionPayload);
  }

  // As an admin, I want to edit an existing Action to update its properties.
  async updateExistingAction() {
    const action = await this.actionRepository.findOneOrFail({
      where: { name: this.createActionPayload.name },
    });
    const updatedAction = this.actionRepository.merge(action, {
      name: `${action.name} - updated`,
      des: `${action.des} - updated`,
    });
    await this.actionRepository.save(updatedAction);
  }

  // Acceptance Criteria:
  // Admin can select an action and delete it.
  // The system removes the action from all roles and themes where it was used.
  async deleteExistingAction() {
    const action = await this.actionRepository.findOneOrFail({
      where: { name: this.createActionPayload.name },
      select: ['id'],
    });
    await this.actionRepository.remove(action);
  }

  // As an admin, I want to view a list of all Actions to manage them effectively.
  // Acceptance Criteria:
  // Admin can see a list of all actions with their details.
  // Admin can sort and filter the list.
  async viewListOfActions() {
    const [actions, total] = await this.actionRepository.findAndCount({
      select: ['name', 'des', 'isBaseAction', 'key', 'config', 'longDesc'],
    });
    console.log(actions, total);
  }
}
