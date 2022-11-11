import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './hubs/Routing'
import { store } from './store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  )
}

export default App
