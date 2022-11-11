import React from 'react'
import { useDispatch } from "react-redux"
import { changeState } from "../../../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "../../../utils/helpers/app.helpers"

const GameNumbersOfPlayerContainer = () => {
  const dispatch = useDispatch()

  const moveToGameType = () => {
    dispatch(changeState(AppStates.typeOfGame))
  }
  return <div onClick={moveToGameType}>GameNumbersOfPlayerContainer</div>
}

export default GameNumbersOfPlayerContainer
