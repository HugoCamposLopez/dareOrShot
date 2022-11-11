import React from 'react'
import { useDispatch } from 'react-redux'
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../../utils/helpers/app.helpers'

const GameRulesContainer = () => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(changeState(AppStates.numberOfPlayers))}>
      GameRulesContainer
    </div>
  )
}

export default GameRulesContainer
