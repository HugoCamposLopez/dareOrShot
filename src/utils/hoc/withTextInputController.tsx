import React from 'react'
import { Controller } from 'react-hook-form'
import {
  RSInputTextProps
} from '../../components/RSInputText/RSInputText'

interface RSTextInputsPropsHoc extends RSInputTextProps {
  name: string
  control: any
  defaultValue?: string
}

const withTextInputController = (
  // eslint-disable-next-line no-undef
  WrappedComponent: (props: RSInputTextProps) => JSX.Element
) => {
  const WithTextInputController = (props: RSTextInputsPropsHoc) => {
    const { name, control } = props
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <WrappedComponent
              value={field.value}
              // eslint-disable-next-line react/jsx-handler-names
              onChange={field.onChange}
              {...props}
            />
          )
        }}
      />
    )
  }
  return WithTextInputController
}

export default withTextInputController
