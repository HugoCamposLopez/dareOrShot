import React from 'react'
import { Select } from '@mantine/core'
import { useIntl } from 'react-intl'
import { numberOfPlayers } from '../../utils/helpers/app.helpers'
import './styles.scss'

export interface RSDropdownProps {
  onChange: (val: string) => void
  value: string
  error?: string | undefined
}

export const RSDropdown = ({ onChange, value, error }: RSDropdownProps) => {
  const { formatMessage } = useIntl()
  return (
    <div className="dropdown-container">
      <Select
        data={numberOfPlayers}
        placeholder={formatMessage({
          id: 'component.dropdown.placeholder',
        })}
        value={value}
        onChange={onChange}
        error={error && formatMessage({ id: error })}
      />
    </div>
  )
}
