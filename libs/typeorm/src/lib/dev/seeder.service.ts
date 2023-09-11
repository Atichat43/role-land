/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { SEED as SEED_DOMAIN } from '@role-land/domain';
import {
  DataSource,
  DeepPartial,
  EntityTarget,
  QueryRunner,
  SaveOptions,
} from 'typeorm';

import * as Entities from '../entities';

export enum SeederMethod {
  Save = 'save',
  Delete = 'delete',
  DropTable = 'dropTable',
}

type SeedDataEntry<Entity, DataType> = {
  tableName: string;
  entity: Entity;
  mockData: ReadonlyArray<DataType>;
};

type AnySeedDataEntry = SeedDataEntry<any, any>;

@Injectable()
export class SeederService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  private seedData: AnySeedDataEntry[] = [];

  private getSeedData() {
    this.seedData = [
      {
        tableName: Entities.ActionEntityTableName,
        entity: Entities.ActionEntity,
        mockData: SEED_DOMAIN.actionMock.getAllActions(),
      },
      {
        tableName: Entities.ThemeEntityTableName,
        entity: Entities.ThemeEntity,
        mockData: SEED_DOMAIN.themeMock.getAllThemes(),
      },
      {
        tableName: Entities.RoleEntityTableName,
        entity: Entities.RoleEntity,
        mockData: SEED_DOMAIN.roleMock.getAllRoles(),
      },
      {
        tableName: Entities.SharedLinkEntityTableName,
        entity: Entities.SharedLinkEntity,
        mockData: SEED_DOMAIN.sharedLinkMock.getAllSharedLinks(),
      },
      {
        tableName: Entities.UserEntityTableName,
        entity: Entities.UserEntity,
        mockData: SEED_DOMAIN.userMock.getAllUsers(),
      },
      {
        tableName: Entities.TeamEntityTableName,
        entity: Entities.TeamEntity,
        mockData: SEED_DOMAIN.teamMock.getAllTeams(),
      },
      {
        tableName: Entities.TeamMemberEntityTableName,
        entity: Entities.TeamMemberEntity,
        mockData: SEED_DOMAIN.teamMemberMock.getAllTeamMembers(),
      },
      {
        tableName: Entities.AchievementEntityTableName,
        entity: Entities.AchievementEntity,
        mockData: SEED_DOMAIN.achievementMock.getAllAchievements(),
      },
      {
        tableName: Entities.UserAchievementEntityTableName,
        entity: Entities.UserAchievementEntity,
        mockData: SEED_DOMAIN.userAchievementMock.getAllUserAchievements(),
      },
      {
        tableName: Entities.UserAchievementProgressEntityTableName,
        entity: Entities.UserAchievementProgressEntity,
        mockData:
          SEED_DOMAIN.userAchievementProgressMock.getAllUserAchievementProgresses(),
      },
      {
        tableName: Entities.SessionEntityTableName,
        entity: Entities.SessionEntity,
        mockData: SEED_DOMAIN.sessionMock.getAllSessions(),
      },
    ];
  }

  async main(method: SeederMethod) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    this.getSeedData();

    try {
      switch (method) {
        case SeederMethod.DropTable:
          await this.dropTables(queryRunner);
          break;
        case SeederMethod.Delete:
          await this.deleteEntities(queryRunner);
          break;
        case SeederMethod.Save:
          await this.saveEntities(queryRunner);
          break;
      }

      await queryRunner.commitTransaction();
      Logger.log(`✅ seeder ${method} complete!`);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error(error);
      Logger.error('Transaction failed:', error);
    } finally {
      await queryRunner.release();
    }
  }

  private async dropTables(queryRunner: QueryRunner) {
    for (const { entity } of this.seedData.reverse()) {
      await queryRunner.dropTable(entity.name, true, true, true);
    }
  }

  private async deleteEntities(queryRunner: QueryRunner) {
    for (const { entity } of this.seedData.reverse()) {
      await queryRunner.manager.delete(entity, {});
    }
  }

  private async saveEntities(queryRunner: QueryRunner) {
    for (const { entity, mockData } of this.seedData) {
      await this.dynamicSave(queryRunner, entity, mockData as any[]);
    }
  }

  private async dynamicSave<Entity, T extends DeepPartial<Entity>>(
    queryRunner: QueryRunner,
    entityTarget: EntityTarget<Entity>,
    entities: T[],
    options?: SaveOptions,
  ): Promise<(T & Entity)[]> {
    return await queryRunner.manager.save(entityTarget, entities, options);
  }
}
