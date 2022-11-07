import React from 'react'
import { IntlProvider } from 'react-intl'
import Spanish from '../i18n/es-MX.json'

interface LocaleConfig {
  [key: string]: any
}
const local = navigator.language
const messages: LocaleConfig = Spanish

const withProviders = (component: React.ReactNode) => {
  return (
    <IntlProvider locale={local} messages={messages} defaultLocale="es">
      {component}
    </IntlProvider>
  )
}

export default withProviders
