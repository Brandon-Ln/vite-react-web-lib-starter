import { useEffect } from 'react'
import type { DemoProps } from './interface'

export function DemoComponent(props: DemoProps) {
  const { children = '', logMessage } = props

  console.count(logMessage)

  useEffect(() => {
    console.log(`${DemoComponent.name} rendered`)
  }, [])

  return <div>{children}</div>
}

export function WrapperComponent() {
  return <DemoComponent logMessage="foo" />
}
