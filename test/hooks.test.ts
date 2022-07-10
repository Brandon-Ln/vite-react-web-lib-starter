import { it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useDemo } from '../src';
import { expect } from 'vitest';

const res = renderHook(() => useDemo());

it('result should return undefined', () => {
  const { current } = res.result;
  expect(current).toBeUndefined();
});
