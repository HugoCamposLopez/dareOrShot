import React, { useCallback } from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { AppStates } from '../../utils/helpers/app.helpers'
import GameWelcomeContainer from '../../containers/GameContainer/GameWelcomeContainer/GameWelcomeContainer'
import GameRulesContainer from '../../containers/GameContainer/GameRulesContainer/GameRulesContainer'
import GameNumbersOfPlayerContainer from '../../containers/GameContainer/GameNumbersOfPlayerContainer/GameNumbersOfPlayerContainer'
import GameNameOfPlayersContainer from '../../containers/GameContainer/GameNameOfPlayersContainer/GameNameOfPlayersContainer'
import GameTypeOfGameContainer from '../../containers/GameContainer/GameTypeOfGameContainer/GameTypeOfGameContainer'
import GamePlayContainer from '../../containers/GameContainer/GamePlayContainer/GamePlayContainer'

const GameScreen = () => {
  const { stateOfGame } = useSelector((state: RootState) => state)
  const containerToRender = useCallback(() => {
    switch (stateOfGame) {
      case AppStates.welcome:
        return <GameWelcomeContainer />
      case AppStates.rules:
        return <GameRulesContainer />
      case AppStates.numberOfPlayers:
        return <GameNumbersOfPlayerContainer />
      case AppStates.nameOfPlayers:
        return <GameNameOfPlayersContainer />
      case AppStates.typeOfGame:
        return <GameTypeOfGameContainer />
      case AppStates.daresOrShots:
        return <GamePlayContainer />
      default:
        break
    }
  }, [stateOfGame])
  return <>{containerToRender()}</>
}

export default GameScreen
