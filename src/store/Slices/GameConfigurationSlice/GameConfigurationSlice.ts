import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GameConfirationInitialStateI{
  numberOfPlayers: number
}

const initialState: GameConfirationInitialStateI = {
numberOfPlayers: 0
}

const GameConfigurationSlice = createSlice({
  initialState,
  name: "gameconfiguration",
  reducers: {
    setNumberOfPlayers: (state, action: PayloadAction<number>) => {
      state.numberOfPlayers = action.payload
    }
  }
})

export const {setNumberOfPlayers} = GameConfigurationSlice.actions

export default GameConfigurationSlice.reducer