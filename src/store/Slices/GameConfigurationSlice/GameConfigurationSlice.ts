import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GameConfirationInitialStateI {
  nameOfPlayers: { name: string | undefined }[]
  dificulty: string,
  player: number
}

const initialState: GameConfirationInitialStateI = {
  nameOfPlayers: [],
  dificulty: '',
  player: 0
}
const GameConfigurationSlice = createSlice({
  initialState,
  name: 'gameconfiguration',
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      if (state.nameOfPlayers.some((name) => name.name === action.payload)) {
        // this will be replaced with a modal
        alert('Este usuario ya existe')
      } else {
        state.nameOfPlayers.push({ name: action.payload })
      }
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.nameOfPlayers = state.nameOfPlayers.filter(
        (name) => action.payload !== name.name
      )
    },
    setDificulty: (state, action: PayloadAction<string>) => {
      state.dificulty = action.payload
    },
    restartGame: (state) => {
      state.nameOfPlayers = []
      state.dificulty = ''
    },
    setPlayer: (state, action: PayloadAction<number>) => {
      state.player = action.payload
    }
  }
})

export const { addPlayer, deletePlayer, setDificulty, restartGame, setPlayer } =
  GameConfigurationSlice.actions

export default GameConfigurationSlice.reducer
