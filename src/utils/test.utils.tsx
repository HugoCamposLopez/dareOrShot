import React, { FC, PropsWithChildren, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { createIntl, createIntlCache, IntlProvider } from "react-intl"
import Spanish from "../i18n/es-MX.json"
import { Provider } from "react-redux"
import { rootReducer, RootState, store } from "../store/store"
import { BrowserRouter } from "react-router-dom"
import { EmptyObject } from "react-hook-form"
import { CombinedState, configureStore } from "@reduxjs/toolkit"
import GameConfigurationSlice from "../store/Slices/GameConfigurationSlice/GameConfigurationSlice"
import UserStateSlice from "../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "./helpers/app.helpers"

export type PreloadedState<S> = Required<S> extends EmptyObject
  ? S extends CombinedState<infer S1>
    ? {
        [K in keyof S1]?: S1[K] extends object ? PreloadedState<S1[K]> : S1[K]
      }
    : S
  : {
      [K in keyof S]: S[K] extends string | number | boolean | symbol
        ? S[K]
        : PreloadedState<S[K]>
    }

interface LocaleConfig {
  [key: string]: any
}
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>|undefined|{}
  store?: any // The correct type is AppStore, but we need to update Redux store configuration prior to this change
}
const local = navigator.language
const messages: LocaleConfig = Spanish
const cache = createIntlCache()
const intl = createIntl({ locale: "es-MX", messages }, cache)

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    //Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        gameconfiguration: GameConfigurationSlice,
        userState: UserStateSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <IntlProvider messages={messages} onError={() => {}} locale="es-MX">
        <Provider store={store}>{children}</Provider>
      </IntlProvider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <Provider store={store}>
        <IntlProvider locale={local} messages={messages} defaultLocale="es">
          {children}
        </IntlProvider>
      </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export const getStore = (preloadedState: any) =>
  configureStore({
    reducer: rootReducer,
    // middleware: [thunk],
    // configureStore with preloadedState
    preloadedState,
  })
export * from "@testing-library/react"
export { intl }
export { customRender as render }
