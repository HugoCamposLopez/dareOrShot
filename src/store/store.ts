import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserStateSlice from './Slices/UserStateSlice/UserStateSlice'
import GameConfigurationSlice from './Slices/GameConfigurationSlice/GameConfigurationSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import UserAuthSlice from "./Slices/UserAuthSlice/UserAuthSlice";
import { PreloadedState } from "../utils/test.utils";

const persistConfig = {
  key: 'root1',
  storage,
}

const reducers = combineReducers({ gameconfiguration: GameConfigurationSlice, userState: UserStateSlice, userAuth: UserAuthSlice })
export const rootReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]

})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)

