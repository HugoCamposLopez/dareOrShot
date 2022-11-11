import React from 'react'
import { Image } from '@mantine/core'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { changeState } from '../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../utils/helpers/app.helpers'
import { useNavigate } from 'react-router-dom'
const HomeContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <div
        className="img-container"
        onClick={() => {
          dispatch(changeState(AppStates.welcome))
          navigate('/game', { replace: true })
        }}
      >
        <Image src="./logo/logo.png" width={170} height={150} />
      </div>
    </div>
  )
}

export default HomeContainer
