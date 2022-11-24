import React from 'react'
import { TextInput, Image } from '@mantine/core'
import { useIntl } from 'react-intl'
import './styles.scss'
export interface RSInputTextProps {
  placeholder: string
  isError?: boolean
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
export const RSInputText = ({
  placeholder,
  isError,
  onChange,
  value,
}: RSInputTextProps) => {
  const intl = useIntl()
  return (
    <div className={`text-input-container ${isError ? 'error' : ''}`}>
      <p>{intl.formatMessage({ id: 'component.text.name' })}</p>
      <TextInput
        value={value}
        onChange={onChange}
        error={isError}
        icon={
          <Image width={25} height={25} src="./icons/glass-user-icon.svg" alt="input-icon" />
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
