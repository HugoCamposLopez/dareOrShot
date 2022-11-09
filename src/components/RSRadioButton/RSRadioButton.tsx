import { Radio } from '@mantine/core'
import React from 'react'
import { useIntl } from 'react-intl'
import './styles.scss'

export interface RSRadioButtonProps {
  value: string
  onChange: (val: string) => void
}

const RSRadioButton = ({ value, onChange }: RSRadioButtonProps) => {
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
