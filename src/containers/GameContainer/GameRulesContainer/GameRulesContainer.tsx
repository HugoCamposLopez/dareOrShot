import React from 'react'
import { Text } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../../utils/helpers/app.helpers'
import { useIntl } from 'react-intl'
import './styles.scss'
import RSButton from '../../../components/RSButton/RSButton'
const GameRulesContainer = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
  return (
    <div className="rules-container">
      <Text className="rules-description-1">
        {intl.formatMessage({ id: 'rules.text.1' })}
      </Text>
      <Text className="rules-description-2">
        {intl.formatMessage({ id: 'rules.text.2' })}
      </Text>
      <div className="button-container">
        <RSButton
          title="continue"
          onClick={() => dispatch(changeState(AppStates.numberOfPlayers))}
        />
      </div>
    </div>
  )
}

export default GameRulesContainer
