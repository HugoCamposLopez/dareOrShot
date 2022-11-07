import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import withProviders from '../../utils/withProviders'
import { RSInputText, RSInputTextProps } from './RSInputText'

export default {
  title: 'components/RSInputText',
  component: RSInputText,
} as ComponentMeta<typeof RSInputText>

export const DefaultInputText: ComponentStoryObj<typeof RSInputText> = ({
  placeholder,
  isError,
  onChange,
  value,
}: RSInputTextProps) => {
  const [value1, setValue] = useState<any>('')

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  return withProviders(
    <RSInputText
      value={value1}
      onChange={onChangeHandler}
      isError={isError}
      placeholder={placeholder}
    />
  )
}
export const ErrorInputText: ComponentStoryObj<typeof RSInputText> = ({
  placeholder,
  isError,
  onChange,
}: RSInputTextProps) => {
  const [value1, setValue] = useState<any>('')

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )
  return withProviders(
    <RSInputText
      isError={isError}
      value={value1}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

DefaultInputText.args = {
  placeholder: 'component.text.placeholder',
  isError: false,
}

ErrorInputText.args = {
  placeholder: 'component.text.placeholder',
  isError: true,
}
