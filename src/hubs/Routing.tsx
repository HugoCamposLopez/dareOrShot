import React from "react"
import { Route, Routes } from "react-router-dom"
import GameScreen from "../screens/GameScreen/GameScreen"
import HomeScreen from "../screens/HomeScreen/HomeScreen"
import { WithProtectedRoutes } from "../utils/hoc/withProtectedRoutes"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import ItemId from "../screens/ItemId/ItemId"
import { AppStates } from "../utils/helpers/app.helpers"
const Routing = () => {
  const { stateOfGame } = useSelector((state: RootState) => state.userState)
  return (
    <Routes>
      {stateOfGame === AppStates.initial ? (
        <Route path="/" element={<HomeScreen />} />
      ) : (
        <Route path="/game" element={<GameScreen />} />
      )}
      <Route path="/products/:id" element={<ItemId />} />
      <Route
        path="*"
        element={<WithProtectedRoutes stateOfUser={stateOfGame} />}
      />
    </Routes>
  )
}

export default Routing
