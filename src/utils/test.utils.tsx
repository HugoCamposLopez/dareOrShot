import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { createIntl, createIntlCache, IntlProvider } from "react-intl"
import Spanish from "../i18n/es-MX.json"
import { Provider } from "react-redux"
import { store } from "../store/store"
  import { BrowserRouter } from "react-router-dom"


interface LocaleConfig {
  [key: string]: any
}
const local = navigator.language
const messages: LocaleConfig = Spanish
const cache = createIntlCache()
const intl = createIntl({ locale: "es-MX", messages }, cache)

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <IntlProvider locale={local} messages={messages} defaultLocale="es">
          {children}
        </IntlProvider>
      </Provider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { intl }
export { customRender as render }
