import React from 'react'
import { useDispatch } from "react-redux"
import { changeState } from "../../../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "../../../utils/helpers/app.helpers"

const GameTypeOfGameContainer = () => {
  const dispatch = useDispatch()
  const moveToPlayGame = () =>{
    dispatch(changeState(AppStates.daresOrShots))
  }

  return <div onClick={moveToPlayGame}>GameTypeOfGameContainer</div>
}

export default GameTypeOfGameContainer
