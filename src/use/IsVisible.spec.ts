import { describe, it, expect } from 'vitest';
import isVisible from './isVisible';

describe('isVisible', () => {
  it('should be defined', () => {
    expect(isVisible).toBeDefined();
    expect(typeof isVisible).toBe('function');
  });

  it('should prevent if there is no dependnecy');
});
