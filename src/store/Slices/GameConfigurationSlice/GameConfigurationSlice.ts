import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export interface GameConfirationInitialStateI {
  nameOfPlayers: { name: string | undefined }[]
}

const initialState: GameConfirationInitialStateI = {
  nameOfPlayers: []
}
const GameConfigurationSlice = createSlice({
  initialState,
  name: "gameconfiguration",
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      console.log(state.nameOfPlayers.some(name => name.name === action.payload))
      if (state.nameOfPlayers.some(name => name.name === action.payload)) {
        //this will be replaced with a modal
        alert("Este usuario ya existe")
      } else {
        state.nameOfPlayers.push({ name: action.payload })
      }
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.nameOfPlayers = state.nameOfPlayers.filter((name) => action.payload !== name.name)
    }
  }
})

export const { addPlayer, deletePlayer } = GameConfigurationSlice.actions

export default GameConfigurationSlice.reducer