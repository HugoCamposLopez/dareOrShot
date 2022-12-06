import { Controller } from "react-hook-form"
import {
  RSInputTextProps,
} from "../../components/RSInputText/RSInputText"

interface RSTextInputsPropsHoc extends RSInputTextProps {
  name: string
  control: any
  defaultValue?: string
}

const withTextInputController = (
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