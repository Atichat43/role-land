import { Assert } from './assert';

describe('Assert', () => {
  const AssertionError: Error = new Error('AssertionError');

  describe('isTrue', () => {
    it("shouldn't throw error when expression is TRUE", () => {
      expect(Assert.isTrue(true, AssertionError)).toBeUndefined();
    });

    it('should throw error when expression is FALSE', () => {
      expect.hasAssertions();

      try {
        Assert.isTrue(false, AssertionError);
      } catch (e) {
        expect(e).toEqual(AssertionError);
      }
    });
  });

  describe('isFalse', () => {
    it("shouldn't throw error when expression is FALSE", () => {
      expect(Assert.isFalse(false, AssertionError)).toBeUndefined();
    });

    it('should throw error when expression is TRUE', () => {
      expect.hasAssertions();

      try {
        Assert.isFalse(true, AssertionError);
      } catch (e) {
        expect(e).toEqual(AssertionError);
      }
    });
  });

  describe('notEmpty', () => {
    it('should return expression when expression is not <NULL|UNDEFINED>', () => {
      expect(Assert.notEmpty({}, AssertionError)).toEqual({});
    });

    it('should throw error when expression is NULL', () => {
      expect.hasAssertions();

      try {
        Assert.notEmpty(null, AssertionError);
      } catch (e) {
        expect(e).toEqual(AssertionError);
      }
    });

    it('should throw error when expression is UNDEFINED', () => {
      expect.hasAssertions();

      try {
        Assert.notEmpty(undefined, AssertionError);
      } catch (e) {
        expect(e).toEqual(AssertionError);
      }
    });
  });
});
