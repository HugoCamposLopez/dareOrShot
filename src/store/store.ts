import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserStateSlice from './Slices/UserStateSlice/UserStateSlice'
import GameConfigurationSlice from './Slices/GameConfigurationSlice/GameConfigurationSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({ gameconfiguration: GameConfigurationSlice, userState: UserStateSlice })
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
