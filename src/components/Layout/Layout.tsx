import React from 'react'
import { Image } from '@mantine/core'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { changeState } from '../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../utils/helpers/app.helpers'
import RSButton from '../RSButton/RSButton'
import { restartGame } from '../../store/Slices/GameConfigurationSlice/GameConfigurationSlice'
export interface LayoutProps {
  children?: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch()
  return (
    <header className='layout-container'>
      <div className='nav-container'>
        <div className='nav-bar-left' />
        <div className='img-logo'>
          <Image src='/dareOrShot/logo/logo.png' width={110} height={100} />
        </div>
        <div>
          <RSButton
            title='restart.game.button' onClick={() => {
              dispatch(changeState(AppStates.initial))
              dispatch(restartGame())
            }}
          />
        </div>
      </div>
      <div className='children-layout'>
        {children}
      </div>
    </header>
  )
}

export default Layout
