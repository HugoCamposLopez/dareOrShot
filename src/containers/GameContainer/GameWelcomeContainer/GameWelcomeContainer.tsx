import React from 'react'
import { useDispatch } from 'react-redux'
import RSButton from '../../../components/RSButton/RSButton'
import RSLogo from '../../../components/RSLogo/RSLogo'
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../../utils/helpers/app.helpers'
import './styles.scss'
const GameWelcomeContainer = () => {
  const dispatch = useDispatch()
  return (
    <div className='welcome-container'>
      <div className='logo-container'>
        <RSLogo />
      </div>
      <div className='start-game-button-container'>
        <RSButton
          title='start.game'
          onClick={() => dispatch(changeState(AppStates.rules))}
        />
      </div>
    </div>
  )
}

export default GameWelcomeContainer
