import React, { useState } from 'react'
import { Text } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates, numberOfPlayers } from '../../../utils/helpers/app.helpers'
import { useIntl } from 'react-intl'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RSDropdown } from '../../../components/RSDropdown/RSDropdown'
import withDropdownController from '../../../utils/hoc/withDropdownController'
import './styles.scss'
import RSButton from '../../../components/RSButton/RSButton'
import { numberOfPlayersResolver } from '../../../utils/validationSchemas/Resolvers'
import { setNumberOfPlayers } from '../../../store/Slices/GameConfigurationSlice/GameConfigurationSlice'

const ControllerDropdown = withDropdownController(RSDropdown)

const GameNumbersOfPlayerContainer = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(numberOfPlayersResolver),
  })
  const { control, handleSubmit, formState } = methods
  const { errors } = formState

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const intl = useIntl()

  const moveToGameType = () => {
    dispatch(changeState(AppStates.typeOfGame))
  }

  const handleSumbitForm = (data: any) => {
    dispatch(setNumberOfPlayers(parseInt(data.numbers)))
    moveToGameType()
  }

  return (
    <div className="numbers-of-players-container">
      <Text className="number-of-players-description">
        {intl.formatMessage({ id: 'numbers.of.players.text' })}
      </Text>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSumbitForm)}>
          <div className="numbers-dropdown-container">
            <ControllerDropdown
              control={control}
              name={'numbers'}
              onChange={setValue}
              value={value}
              error={
                errors.numbers?.message && (errors.numbers?.message as string)
              }
            />
          </div>
          <div className={`numbers-button-container ${errors.numbers?.message ? "error" : "" }` }>
            <RSButton title="continue" sumbit />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default GameNumbersOfPlayerContainer
