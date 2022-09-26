import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  )
}

export default Routing
