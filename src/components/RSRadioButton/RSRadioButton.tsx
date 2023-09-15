import { Radio } from '@mantine/core'
import React from 'react'
import { useIntl } from 'react-intl'
import './styles.scss'

export interface RadioOptions {
  value: string
  label: string
}
export interface RSRadioButtonProps {
  options: RadioOptions[]
  onChange: (val: string) => void
  value: string
}

const RSRadioButton = ({ options, onChange, value }: RSRadioButtonProps) => {
  const intl = useIntl()
  return (
    <div>
      <Radio.Group
        className='radio-group-container'
        withAsterisk
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <Radio
              value={option.value}
              label={intl.formatMessage({ id: option.label })}
              key={option.value}
            />
          )
        })}

      </Radio.Group>
    </div>
  )
}

export default RSRadioButton
