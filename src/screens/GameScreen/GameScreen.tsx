import React, { useCallback } from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { AppStates } from '../../utils/helpers/app.helpers'
import withLayout from '../../utils/hoc/withLayout'
import GameWelcomeContainer from '../../containers/GameContainer/GameWelcomeContainer/GameWelcomeContainer'
import GameRulesContainer from '../../containers/GameContainer/GameRulesContainer/GameRulesContainer'
import GameNameOfPlayersContainer from '../../containers/GameContainer/GameNameOfPlayersContainer/GameNameOfPlayersContainer'
import GameTypeOfGameContainer from '../../containers/GameContainer/GameTypeOfGameContainer/GameTypeOfGameContainer'
import GamePlayContainer from '../../containers/GameContainer/GamePlayContainer/GamePlayContainer'

const GameScreen = () => {
  const { stateOfGame } = useSelector((state: RootState) => state.userState)
  const containerToRender = useCallback(() => {
    switch (stateOfGame) {
      case AppStates.welcome:
        return <GameWelcomeContainer />
      case AppStates.rules:
        return withLayout(<GameRulesContainer />)
      case AppStates.nameOfPlayers:
        return withLayout(<GameNameOfPlayersContainer />)
      case AppStates.typeOfGame:
        return withLayout(<GameTypeOfGameContainer />)
      case AppStates.daresOrShots:
        return withLayout(<GamePlayContainer />)
      default:
        break
    }
  }, [stateOfGame])
  return <>{containerToRender()}</>
}

export default GameScreen
