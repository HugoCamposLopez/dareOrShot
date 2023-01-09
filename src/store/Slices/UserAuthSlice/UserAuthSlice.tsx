import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  email: "",
  password: "",
  token: "",
}

export const userAuthSlice = createSlice({
  initialState,
  name: "userAuth",
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setTOken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

export const { setEmail, setPassword, setTOken } = userAuthSlice.actions
export default userAuthSlice.reducer
