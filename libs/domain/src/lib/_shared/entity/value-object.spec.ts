/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { IClassValidationDetails } from '@role-land/helper';
import { IsString } from 'class-validator';

import { ErrorCode } from '../error/error-code';
import { Exception } from '../error/exception';
import { ValueObject } from './value-object';

class MockValueObject extends ValueObject {
  @IsString()
  public address: string;

  constructor(address: string) {
    super();
    this.address = address;
  }
}

describe('ValueObject', () => {
  describe('validate', () => {
    it('should not throw Exception when MockValueObject is valid', async () => {
      const validValueObject: MockValueObject = new MockValueObject(
        'The Tower of the Swallow',
      );
      await expect(validValueObject.validate()).resolves.toBeUndefined();
    });

    it('should throw Exception when MockValueObject is not valid', async () => {
      const address: unknown = 42;
      const invalidValueObject: MockValueObject = new MockValueObject(
        address as string,
      );

      expect.hasAssertions();

      try {
        await invalidValueObject.validate();
      } catch (e) {
        const exception: Exception<IClassValidationDetails> =
          e as Exception<IClassValidationDetails>;

        expect(exception).toBeInstanceOf(Exception);
        expect(exception.code).toBe(
          ErrorCode.VALUE_OBJECT_VALIDATION_ERROR.code,
        );
        expect(exception.data!.errors[0].property).toBe('address');
      }
    });
  });
});
