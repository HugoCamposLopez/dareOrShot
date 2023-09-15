import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import withProviders from '../../utils/withProviders'
import { RSDropdown } from './RSDropdown'

export default {
  title: 'components/RSDropdown',
  component: RSDropdown
} as ComponentMeta<typeof RSDropdown>

export const DefaultDropdown: ComponentStory<typeof RSDropdown> = () => {
  const [value1, setValue] = useState('')
  const onChangeHandler = (valueDropdown: string) => {
    setValue(valueDropdown)
  }
  return withProviders(<RSDropdown value={value1} onChange={onChangeHandler} />)
}
