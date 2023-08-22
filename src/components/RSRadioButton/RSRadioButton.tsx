import { Radio } from '@mantine/core'
import React from 'react'
import { useIntl } from 'react-intl'
import './styles.scss'

interface RadioOptions{
  value: string
  label: string
}
export interface RSRadioButtonProps {
  options: RadioOptions
  onChange: (val: string) => void
  value: string
}

const RSRadioButton = ({ options, onChange, value }: RSRadioButtonProps) => {
  const intl = useIntl()
  return (
    <div>
      <Radio.Group
        className="radio-group-container"
        withAsterisk
        value={value}
        onChange={onChange}
      >
        <Radio
          value="0"
          label={intl.formatMessage({ id: 'component.radio.button.0' })}
        />
        <Radio
          value="1"
          label={intl.formatMessage({ id: 'component.radio.button.1' })}
        />
        <Radio
          value="2"
          label={intl.formatMessage({ id: 'component.radio.button.2' })}
        />
      </Radio.Group>
    </div>
  )
}

export default RSRadioButton
