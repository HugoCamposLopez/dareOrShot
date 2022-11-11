import React from 'react'
import GameScreen from '../../screens/GameScreen/GameScreen'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import { AppStates } from '../helpers/app.helpers'

interface WithProtectedRoutesI {
  stateOfUser: AppStates
}

export const WithProtectedRoutes = ({
  stateOfUser,
}: WithProtectedRoutesI): React.ReactElement => {
  if (stateOfUser === AppStates.initial) {
    return <HomeScreen />
  } else {
    return <GameScreen />
  }
}
