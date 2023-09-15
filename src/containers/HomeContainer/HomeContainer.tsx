import React from 'react'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { changeState } from '../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../utils/helpers/app.helpers'
import { useNavigate } from 'react-router-dom'
import RSLogo from '../../components/RSLogo/RSLogo'
const HomeContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const navigateToWelcome = () => {
    dispatch(changeState(AppStates.welcome))
    navigate('/game', { replace: true })
  }

  return (
    <div className='home-container'>
      <RSLogo onClick={navigateToWelcome} />
    </div>
  )
}

export default HomeContainer
