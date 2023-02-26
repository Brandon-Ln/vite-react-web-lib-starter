import React from 'react'
import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'

import { WrapperComponent } from '../src/index'

function App() {
  return (
    <Fragment>
      Hello World
      <WrapperComponent />
    </Fragment>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
