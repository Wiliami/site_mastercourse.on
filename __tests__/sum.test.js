import { test, expect } from '@jest/globals';
import Math from '../math';

test('adds 1 + 2 to equal 3', () => {
    expect(Math.sum(1, 2)).toBe(3);
});