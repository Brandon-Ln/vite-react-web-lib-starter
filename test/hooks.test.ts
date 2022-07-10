import { it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { expect, describe } from 'vitest';

import { useDemo } from '../src';

const res = renderHook(() => useDemo());

describe('hooks', () => {
  it('result should return undefined', () => {
    const { current } = res.result;
    expect(current).toBeUndefined();
  });
});
