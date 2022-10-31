import React from 'react'
import { TextInput, Image } from '@mantine/core'
import { useIntl } from 'react-intl'
import './styles.scss'
export interface RSInputTextProps {
  placeholder: string
  isError: boolean
}
export const RSInputText = ({ placeholder, isError }: RSInputTextProps) => {
  const intl = useIntl()
  return (
    <div className={`text-input-container ${isError ? 'error' : ''}`}>
      <p>{intl.formatMessage({ id: 'component.text.name' })}</p>
      <TextInput
        error={isError}
        icon={
          <Image width={25} height={25} src="./icons/glass-user-icon.svg" />
        }
        placeholder={intl.formatMessage({ id: placeholder })}
      />
      {isError && (
        <p className="errorMessage">
          {intl.formatMessage({ id: 'component.text.error.text' })}
        </p>
      )}
    </div>
  )
}
