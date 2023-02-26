// @vitest-environment jsdom
import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { afterEach, beforeEach, it, describe } from 'vitest'
import { act } from 'react-dom/test-utils'
import { expect } from 'vitest'

import { DemoComponent } from '../src'

let container: HTMLElement

beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // 退出时进行清理
  container && unmountComponentAtNode(container)
  container && container.remove()
})

describe('components', () => {
  it('render children content', () => {
    act(() => {
      render(<DemoComponent logMessage="log" />, container)
    })
    expect(container.textContent).toBeFalsy()

    act(() => {
      render(<DemoComponent logMessage="log">Demo</DemoComponent>, container)
    })
    expect(container.textContent).toBe('Demo')
  })
})
