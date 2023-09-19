/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Optional } from '@role-land/utility-types';
import { IsNumber, IsString } from 'class-validator';

import { ClassValidator, IClassValidationDetails } from './class-validator';

class MockClass {
  @IsString()
  public stringProperty: string;

  @IsNumber()
  public numberProperty: number;

  constructor(stringProperty: string, numberProperty: number) {
    this.stringProperty = stringProperty;
    this.numberProperty = numberProperty;
  }
}

describe('ClassValidator', () => {
  describe('validate', () => {
    it("shouldn't return validation details when valid", async () => {
      const validInstance: MockClass = new MockClass('42', 42);
      await expect(
        ClassValidator.validate(validInstance),
      ).resolves.toBeUndefined();
    });

    it('should return object with validation details when invalid', async () => {
      const stringProperty: unknown = 42;
      const numberProperty: unknown = '42';

      const invalidInstance: MockClass = new MockClass(
        stringProperty as string,
        numberProperty as number,
      );
      const validationDetails: Optional<IClassValidationDetails> =
        await ClassValidator.validate(invalidInstance);

      console.log(validationDetails);

      expect(validationDetails).toBeDefined();
      expect(validationDetails!.context).toBe('MockClass');
      expect(validationDetails!.errors[0].property).toBe('stringProperty');
      expect(validationDetails!.errors[1].property).toBe('numberProperty');
    });
  });
});
