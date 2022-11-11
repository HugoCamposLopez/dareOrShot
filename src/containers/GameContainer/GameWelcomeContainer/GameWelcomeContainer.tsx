import React from 'react'
import { useDispatch } from 'react-redux'
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../../utils/helpers/app.helpers'
const GameWelcomeContainer = () => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(changeState(AppStates.rules))}>

    </div>
  )
}

export default GameWelcomeContainer
