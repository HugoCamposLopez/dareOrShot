import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GameScreen from '../screens/GameScreen/GameScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { WithProtectedRoutes } from '../utils/hoc/withProtectedRoutes'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
const Routing = () => {
  const { stateOfGame } = useSelector((state: RootState) => state.userState)
  return (
    <Routes>
      <Route
        path='/'
        element={<WithProtectedRoutes stateOfUser={stateOfGame} />}
      >
        <Route path='/' element={<HomeScreen />} />
        <Route path='/game' element={<GameScreen />} />
      </Route>
      <Route
        path='*'
        element={<WithProtectedRoutes stateOfUser={stateOfGame} />}
      />
    </Routes>
  )
}

export default Routing
