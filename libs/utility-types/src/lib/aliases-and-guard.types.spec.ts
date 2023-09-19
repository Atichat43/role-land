/* eslint-disable @typescript-eslint/no-explicit-any */
import { Falsy, isFalsy, isNullish, Nullish } from './aliases-and-guard.types';

describe('Alias and Guard Types', () => {
  describe('Falsy & isFalsy', () => {
    it('narrows to correct type', () => {
      const consumer = (param: Falsy | any): string => {
        if (isFalsy(param)) {
          return String(param) + ' was Falsy';
        }
        return param.toString();
      };

      expect(consumer(false)).toBe('false was Falsy');
      expect(consumer('')).toBe(' was Falsy');
      expect(consumer(0)).toBe('0 was Falsy');
      expect(consumer(null)).toBe('null was Falsy');
      expect(consumer(undefined)).toBe('undefined was Falsy');

      expect(consumer('a')).toBe('a');
      expect(consumer(1)).toBe('1');
      expect(consumer(true)).toBe('true');
      expect(consumer({})).toBe('[object Object]');
      expect(consumer([])).toBe('');
    });
  });

  describe('Nullish & isNullish', () => {
    it('narrows to correct type', () => {
      const consumer = (param: Nullish | any): string => {
        if (isNullish(param)) {
          return String(param) + ' was Nullish';
        }
        return param.toString();
      };

      expect(consumer(null)).toBe('null was Nullish');
      expect(consumer(undefined)).toBe('undefined was Nullish');

      expect(consumer('a')).toBe('a');
      expect(consumer(1)).toBe('1');
      expect(consumer(true)).toBe('true');
      expect(consumer({})).toBe('[object Object]');
      expect(consumer([])).toBe('');
    });
  });
});
