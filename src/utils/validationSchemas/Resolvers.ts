import * as Yup from 'yup'

export const nameOfPlayersResolver = Yup.object().shape({
  inputNames: Yup.string().required("component.text.error.text")
})