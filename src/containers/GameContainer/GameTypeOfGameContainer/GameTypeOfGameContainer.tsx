import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../../utils/helpers/app.helpers'
import './styles.scss'
import RSRadioButton from '../../../components/RSRadioButton/RSRadioButton'
import RSButton from '../../../components/RSButton/RSButton'
import { setDificulty } from '../../../store/Slices/GameConfigurationSlice/GameConfigurationSlice'
const GameTypeOfGameContainer = () => {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  const redirectToPlayGame = () => {
    dispatch(changeState(AppStates.daresOrShots))
  }

  const onChangeRadioButton = (val: string) => {
    setState(val)
    dispatch(setDificulty(val))
  }
  const options = [{
    value: '0',
    label: 'component.radio.button.0'
  }, {
    value: '1',
    label: 'component.radio.button.1'
  }, {
    value: '2',
    label: 'component.radio.button.2'
  }]
  return (
    <div className='gametype-container'>
      <h1 className='title'>Ahora elige la intensidad del juego</h1>
      <RSRadioButton onChange={onChangeRadioButton} value={state} options={options} />
      <div className='button-container'>
        <RSButton title='Continuar' onClick={redirectToPlayGame} />
      </div>
    </div>
  )
}

export default GameTypeOfGameContainer
