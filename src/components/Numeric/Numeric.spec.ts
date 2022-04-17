import { assert, describe, expect, it } from 'vitest'

describe('Numeric', () => {
  describe('setValue', () => {
    it('should set value if value is good', () => {
      const value = 123;
      expect(setValue(value)).toEqual(value);
    });

    it('should return minimum value', () => {
      expect(setValue(-2, 0, 100)).toEqual(0);
    });

    it('should return maximum value', () => {
      expect(setValue(100, 0, 100)).toEqual(100);
      expect(setValue(101, 0, 100)).toEqual(100);
    });
  });
});
