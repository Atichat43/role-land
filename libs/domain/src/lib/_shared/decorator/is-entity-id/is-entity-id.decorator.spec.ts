/* eslint-disable @typescript-eslint/no-explicit-any */
import { validate } from 'class-validator';

import { IsEntityId, IsEntityIdConstraint } from './is-entity-id.decorator';

describe('is-entity-id decorator', () => {
  describe('IsEntityIdConstraint', () => {
    let validator: IsEntityIdConstraint;

    beforeEach(() => {
      validator = new IsEntityIdConstraint();
    });

    describe('validate', () => {
      it('should return true for valid UUID strings', () => {
        const validUUID = '550e8400-e29b-41d4-a716-446655440000';
        expect(validator.validate(validUUID)).toBeTruthy();
      });

      it('should return false for invalid UUID strings', () => {
        const invalidUUID = 'invalid-uuid';
        expect(validator.validate(invalidUUID)).toBeFalsy();
      });

      it('should return true for positive numbers', () => {
        expect(validator.validate(123)).toBeTruthy();
      });

      it('should return false for negative numbers', () => {
        expect(validator.validate(-123)).toBeFalsy();
      });

      it('should return false for zero', () => {
        expect(validator.validate(0)).toBeFalsy();
      });

      it('should return false for non-number and non-string values', () => {
        expect(validator.validate({} as any)).toBeFalsy();
        expect(validator.validate([] as any)).toBeFalsy();
        expect(validator.validate(null as any)).toBeFalsy();
        expect(validator.validate(undefined as any)).toBeFalsy();
      });
    });

    describe('defaultMessage', () => {
      it('should return "Invalid entity id"', () => {
        expect(validator.defaultMessage()).toBe('Invalid entity id');
      });
    });
  });

  describe('IsEntityId', () => {
    class MockClass {
      @IsEntityId()
      public id: string | number;
    }

    let mockInstance: MockClass;

    beforeEach(() => {
      mockInstance = new MockClass();
    });

    it('should validate correctly for valid UUID strings', async () => {
      mockInstance.id = '550e8400-e29b-41d4-a716-446655440000';
      const errors = await validate(mockInstance);
      expect(errors.length).toBe(0);
    });

    it('should fail validation for invalid UUID strings', async () => {
      mockInstance.id = 'invalid-uuid';
      const errors = await validate(mockInstance);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toEqual({
        IsEntityId: 'Invalid entity id',
      });
    });

    it('should validate correctly for positive numbers', async () => {
      mockInstance.id = 123;
      const errors = await validate(mockInstance);
      expect(errors.length).toBe(0);
    });

    it('should fail validation for negative numbers', async () => {
      mockInstance.id = -123;
      const errors = await validate(mockInstance);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toEqual({
        IsEntityId: 'Invalid entity id',
      });
    });

    it('should fail validation for zero', async () => {
      mockInstance.id = 0;
      const errors = await validate(mockInstance);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toEqual({
        IsEntityId: 'Invalid entity id',
      });
    });
  });
});
