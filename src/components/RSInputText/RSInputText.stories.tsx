import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import withProviders from '../../utils/withProviders'
import { RSInputText, RSInputTextProps } from './RSInputText'

export default {
  title: 'components/RSInputText',
  component: RSInputText,
} as ComponentMeta<typeof RSInputText>

export const DefaultInputText: ComponentStoryObj<typeof RSInputText> = ({
  placeholder,
  isError,
}: RSInputTextProps) =>
  withProviders(<RSInputText isError={isError} placeholder={placeholder} />)

export const ErrorInputText: ComponentStoryObj<typeof RSInputText> = ({
  placeholder,
  isError,
}: RSInputTextProps) =>
  withProviders(<RSInputText isError={isError} placeholder={placeholder} />)

DefaultInputText.args = {
  placeholder: 'component.text.placeholder',
  isError: false,
}

ErrorInputText.args = {
  placeholder: 'component.text.placeholder',
  isError: true,
}
