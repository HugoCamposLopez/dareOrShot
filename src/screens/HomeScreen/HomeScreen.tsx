import React, { useCallback } from 'react'
import HomeContainer from '../../containers/HomeContainer/HomeContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { AppStates } from '../../utils/helpers/app.helpers'
import GameScreen from '../GameScreen/GameScreen'

const HomeScreen = () => {
  const { stateOfGame } = useSelector((state: RootState) => state.userState)
  console.log(stateOfGame)
    const isHomeOrGame = useCallback(() => {
      switch (stateOfGame) {
        case AppStates.initial:
          return <HomeContainer />
        case AppStates.welcome:
          return <GameScreen />
          default:
            return <GameScreen/>
      }
    },[stateOfGame])
  return <>
  {isHomeOrGame()}
  </>
}

export default HomeScreen
