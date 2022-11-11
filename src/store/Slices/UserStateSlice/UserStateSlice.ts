import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppStates } from "../../../utils/helpers/app.helpers";

export interface initialSateI {
  stateOfGame: AppStates
}
const initialState: initialSateI = {
  stateOfGame: AppStates.initial
}

export const UserStateSlice = createSlice({
  initialState: initialState,
  name: "userState",
  reducers:{
    changeState: (state, action: PayloadAction<AppStates>) => {
      state.stateOfGame = action.payload
    }
  }
})

export const {changeState} = UserStateSlice.actions
export default UserStateSlice.reducer