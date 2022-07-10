import { expect, test } from 'vitest';
import { sum } from '../src/utils/sum';

test('utils-sum: should work as expected', () => {
  expect(sum(1, 2, 3)).toBe(6);
});
