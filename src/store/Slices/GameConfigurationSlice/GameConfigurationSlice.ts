import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GameConfirationInitialStateI{
  nameOfPlayers: {name: string|undefined}[]
}

const initialState: GameConfirationInitialStateI = {
nameOfPlayers: []
}

const GameConfigurationSlice = createSlice({
  initialState,
  name: "gameconfiguration",
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      state.nameOfPlayers.push({name: action.payload})
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.nameOfPlayers = state.nameOfPlayers.filter((name) => action.payload !== name.name)
    }
  }
})

export const {addPlayer, deletePlayer} = GameConfigurationSlice.actions

export default GameConfigurationSlice.reducer