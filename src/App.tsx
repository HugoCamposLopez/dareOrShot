import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Checkbox } from '@mantine/core'
function App() {
  return (
    <div>
      <h1>
        <FormattedMessage id="example.hello" />
        <Checkbox label="Aceptar terminos y condiciones" />
      </h1>
    </div>
  )
}

export default App
