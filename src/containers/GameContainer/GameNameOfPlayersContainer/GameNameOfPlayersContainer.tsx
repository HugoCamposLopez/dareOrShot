import React from "react"
import { Text } from "@mantine/core"
import "./styles.scss"
import { FormattedMessage } from "react-intl"
import withTextInputController from "../../../utils/hoc/withTextInputController"
import { RSInputText } from "../../../components/RSInputText/RSInputText"
import { useDispatch, useSelector } from "react-redux"
import { FormProvider, useForm } from "react-hook-form"
import { useIntl } from "react-intl"
import { RootState } from "../../../store/store"
import { yupResolver } from "@hookform/resolvers/yup"
import RSButton from "../../../components/RSButton/RSButton"
import RSList from "../../../components/RSList/RSList"
import { nameOfPlayersResolver } from "../../../utils/validationSchemas/Resolvers"
import {
  addPlayer,
  deletePlayer,
} from "../../../store/Slices/GameConfigurationSlice/GameConfigurationSlice"
import { changeState } from "../../../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "../../../utils/helpers/app.helpers"

const TextInputController = withTextInputController(RSInputText)

const GameNameOfPlayersContainer = () => {
  const dispatch = useDispatch()
  const { nameOfPlayers } = useSelector(
    (state: RootState) => state.gameconfiguration
  )
  const intl = useIntl()
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(nameOfPlayersResolver),
  })
  const { control, handleSubmit, formState, resetField } = methods
  const { isValid } = formState

  const handleSubmitNames = (data: any) => {
    dispatch(addPlayer(data.inputNames))
    resetField("inputNames", { defaultValue: "" })
  }

  const deletePlayers = (name: string) => {
    dispatch(deletePlayer(name))
  }

  const continueToTypeGame = () => { 
    nameOfPlayers.length > dispatch(changeState(AppStates.typeOfGame))
  }
  return (
    <div className="name-of-player-container">
      <Text className="description-text">
        <FormattedMessage id="names.text.1" />
      </Text>
      <Text className="instructions-text">
        <FormattedMessage id="names.text.2" />
      </Text>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitNames)}>
          <div className="inputs-container">
            <div className="input-element">
              <TextInputController
                control={control}
                name={`inputNames`}
                placeholder={intl.formatMessage({
                  id: "component.text.placeholder",
                })}
                isError={!isValid}
              />
            </div>
          </div>
          <div className="listNames-container">
            <RSList list={nameOfPlayers} onClick={deletePlayers} />
          </div>
          <div className="button-container">
            <RSButton title="add.player" sumbit />
          </div>
        </form>
      </FormProvider>
      <div>
        <RSButton title="continue" onClick={}/>
      </div>
    </div>
  )
}

export default GameNameOfPlayersContainer
