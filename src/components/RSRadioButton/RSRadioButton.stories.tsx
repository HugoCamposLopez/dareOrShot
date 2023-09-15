import { useState } from '@storybook/addons'
import { ComponentMeta } from '@storybook/react'
import withProviders from '../../utils/withProviders'
import RSRadioButton from './RSRadioButton'

export default {
  title: 'components/RSRadioButton',
  component: RSRadioButton
} as ComponentMeta<typeof RSRadioButton>

export const RSRadioButtonDefault = () => {
  const [value1, setValue1] = useState('')
  const options = [{
    value: '0',
    label: "'component.radio.button.0"
  }, {
    value: '1',
    label: "'component.radio.button.1"
  }, {
    value: '2',
    label: "'component.radio.button.2"
  }]
  return withProviders(<RSRadioButton onChange={setValue1} value={value1} options={options} />)
}
