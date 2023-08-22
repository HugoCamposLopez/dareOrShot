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
import { useNavigate } from "react-router-dom"
import { AppStates } from "../../../utils/helpers/app.helpers"
import { RSChip } from "../../../components/RSChip/RSChip"

const TextInputController = withTextInputController(RSInputText)

const GameNameOfPlayersContainer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { nameOfPlayers } = useSelector(
    (state: RootState) => state.gameconfiguration
  )
  console.log(nameOfPlayers)
  const intl = useIntl()
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(nameOfPlayersResolver),
  })
  const { control, handleSubmit, formState, resetField } = methods
  const { isValid, isDirty } = formState

  const handleSubmitNames = (data: any) => {
    dispatch(addPlayer(data.inputNames))
    resetField("inputNames", { defaultValue: "" })
  }

  const deletePlayers = (name: string) => {
    dispatch(deletePlayer(name))
  }

  const continueToTypeGame = () => {
    nameOfPlayers.length > 1 ? dispatch(changeState(AppStates.typeOfGame)) : alert("Neceitas mas de un jugador para poder continuar, no mames como vas a jugar solo")
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
                isError={!isValid && isDirty}
              />
            </div>
          </div>
          <div className="listNames-container">
            {nameOfPlayers.map((user, index) => {
              return (
                <RSChip key={index} user={user} onClick={deletePlayers} />
              )
            })}
          </div>
          <div className="button-container">
            <RSButton title="add.player" sumbit isDisable={!isValid} />
          </div>
        </form>
      </FormProvider>
      <div className="button-container-continue">
        <RSButton title="continue" onClick={continueToTypeGame} />
      </div>
    </div>
  )
}

export default GameNameOfPlayersContainer
