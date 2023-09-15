import React from 'react'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { changeState } from '../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../utils/helpers/app.helpers'
import RSLogo from '../../components/RSLogo/RSLogo'
const HomeContainer = () => {
  const dispatch = useDispatch()

  return (
    <div className='home-container'>
      <RSLogo onClick={() => dispatch(changeState(AppStates.welcome))} />
    </div>
  )
}

export default HomeContainer
