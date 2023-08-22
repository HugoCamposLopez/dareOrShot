import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { changeState } from "../../../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "../../../utils/helpers/app.helpers"
import './styles.scss'
import RSRadioButton from '../../../components/RSRadioButton/RSRadioButton'
const GameTypeOfGameContainer = () => {
  const [state, setState] = useState("")
  const dispatch = useDispatch()

  const moveToPlayGame = () => {
    dispatch(changeState(AppStates.daresOrShots))
  }

  const onChangeRadioButton = (val: string) => {
    setState(val)
    console.log(val)
  }
  const options = {
    value: "Hello",
    label: "1"
  }
  return <div className='gametype-container' >
    <h1>Ahora elige la intensidad del juego</h1>
    <RSRadioButton onChange={onChangeRadioButton} value={state} options={options}/>
  </div>
}

export default GameTypeOfGameContainer
