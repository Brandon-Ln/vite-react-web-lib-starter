import { unmountComponentAtNode, render } from 'react-dom';
import { afterEach, beforeEach, it } from 'vitest';
import { act } from 'react-dom/test-utils';

import { DemoComponents } from '../src';
import { expect } from 'vitest';

let container: HTMLElement;

beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  container && unmountComponentAtNode(container);
  container && container.remove();
});

it('render children content', () => {
  act(() => {
    render(<DemoComponents logMessage="log" />, container);
  });
  expect(container.textContent).toBeFalsy();

  act(() => {
    render(<DemoComponents logMessage="log">Demo</DemoComponents>, container);
  });
  expect(container.textContent).toBe('Demo');
});
