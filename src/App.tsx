import React from 'react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen/HomeScreen'


function App () {
  return (
      <Provider store={store}>
       <HomeScreen />
      </Provider>
  )
}

export default App
