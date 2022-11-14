import React from 'react'
import { Controller } from 'react-hook-form'
import { RSDropdownProps } from '../../components/RSDropdown/RSDropdown'

interface RSDropdownPropsHOC extends RSDropdownProps {
  name: string
  control: any
  defaultValue?: string
}

const withDropdownController = (
  WrappedComponent: (props: RSDropdownProps) => JSX.Element
) => {
  const WithDropdownController = (props: RSDropdownPropsHOC) => {
    const { name, control, defaultValue = undefined } = props
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
          return (
            <WrappedComponent
              {...props}
              onChange={field.onChange}
              value={field.value}
            />
          )
        }}
      />
    )
  }
  return WithDropdownController
}
export default withDropdownController
