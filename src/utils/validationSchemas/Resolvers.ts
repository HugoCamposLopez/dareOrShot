import * as Yup from 'yup'

export const numberOfPlayersResolver = Yup.object().shape({
  numbers: Yup.string().required("errors.number.of.players")
})