import { useState } from '@storybook/addons'
import { ComponentMeta } from '@storybook/react'
import withProviders from '../../utils/withProviders'
import RSRadioButton from './RSRadioButton'

export default {
  title: 'components/RSRadioButton',
  component: RSRadioButton,
} as ComponentMeta<typeof RSRadioButton>

export const RSRadioButtonDefault = () => {
  const [value1, setValue1] = useState('')
  return withProviders(<RSRadioButton onChange={setValue1} value={value1} />)
}
