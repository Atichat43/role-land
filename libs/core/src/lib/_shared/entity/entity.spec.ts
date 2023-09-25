/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IClassValidationDetails } from '@role-land/helper';
import { IsString } from 'class-validator';
import { v4 } from 'uuid';

import { Code } from '../code';
import { Exception } from '../exception';
import { Entity } from './entity';

class MockEntity extends Entity<string> {
  @IsString()
  public name: string;

  constructor(id: string, name: string) {
    super();
    this.id = id;
    this.name = name;
  }
}

describe('Entity', () => {
  describe('property', () => {
    it('should return id when id is set', async () => {
      const id: string = v4();
      const entity: MockEntity = new MockEntity(id, 'Ken');

      expect(entity.id).toBe(id);
    });

    it('should return name when name is set', async () => {
      const name = 'Ken';
      const entity: MockEntity = new MockEntity(v4(), name);

      expect(entity.name).toBe(name);
    });
  });

  describe('validate', () => {
    it('should not throw Exception when MockEntity is valid', async () => {
      const validEntity: MockEntity = new MockEntity(v4(), 'Ken');
      await expect(validEntity.validate()).resolves.toBeUndefined();
    });

    it('should throw Exception when MockEntity is not valid (id)', async () => {
      const id: unknown = true;
      const invalidEntity: MockEntity = new MockEntity(id as string, 'Ken');

      expect.hasAssertions();

      try {
        await invalidEntity.validate();
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_VALIDATION_ERROR.code);
        expect(exception.data!.errors[0].property).toBe('id');
      }
    });

    it('should throw Exception when MockEntity is not valid (name)', async () => {
      const name: unknown = true;
      const invalidEntity: MockEntity = new MockEntity(v4(), name as string);

      expect.hasAssertions();

      try {
        await invalidEntity.validate();
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(Code.ENTITY_VALIDATION_ERROR.code);
        expect(exception.data!.errors[0].property).toBe('name');
      }
    });
  });
});
