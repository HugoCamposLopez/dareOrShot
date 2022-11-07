import React from 'react'
import { Select } from '@mantine/core'
import { useIntl } from 'react-intl'
import { numberOfPlayers } from '../../utils/helpers/app.helpers'
import './styles.scss'

export interface RSDropdownProps {
  onChange: (val: string) => void
  value: string
}

export const RSDropdown = ({ onChange, value }: RSDropdownProps) => {
  const intl = useIntl()
  return (
    <div className="dropdown-container">
      <Select
        data={numberOfPlayers}
        placeholder={intl.formatMessage({
          id: 'component.dropdown.placeholder',
        })}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
