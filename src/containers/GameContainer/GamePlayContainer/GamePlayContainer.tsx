import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayer } from '../../../store/Slices/GameConfigurationSlice/GameConfigurationSlice'
import { RootState } from '../../../store/store'
import gameType1 from '../../../utils/retos/retos1.json'
import gameType2 from '../../../utils/retos/retos2.json'
import gameType3 from '../../../utils/retos/retos3.json'


import './styles.scss';
import RSButton from '../../../components/RSButton/RSButton';
import { changeState } from '../../../store/Slices/UserStateSlice/UserStateSlice'
import { AppStates } from '../../../utils/helpers/app.helpers'
const GamePlayContainer = () => {
  const dispatch = useDispatch()
  const dificulty = useSelector((state: RootState) => state.gameconfiguration.dificulty)
  const player = useSelector((state: RootState) => state.gameconfiguration.player)
  const names = useSelector((state: RootState) => state.gameconfiguration.nameOfPlayers)

  const [playerState, setPlayerState] = useState(0)
  const [dareState, setDareState] = useState(0)
  console.log(player)

  function ToPlay(): JSX.Element {
    let numbersUsed = []
    const dif = () => {
      switch (dificulty) {
        case "0":
          return gameType1
        case "1":
          return gameType2
        case "2":
          return gameType3
        default:
          return gameType1
      }
    }
    if (dareState === dif().length) {
      return (<div className='text_container'>
        <h1 className='dare_text'>¡Has completado todos los retos! Prueba otra dificultad.</h1>
        <div>
          <RSButton title='Volver a jugar' onClick={() => {
            dispatch(setPlayer(0));
            setPlayerState(0)
            setDareState(0)
            numbersUsed.push(dareState)
          }} />
        </div>
        <div>
          <RSButton title='Elegir otra dificultad' onClick={() => {
            dispatch(changeState(AppStates.typeOfGame));
          }} />
        </div>

      </div >)
    }
    return (
      <>
        <div className='text_container'>
          <h1 className='name_text'>{names[playerState].name}:</h1>
          <h1 className='dare_text'>{dif()[dareState]}</h1>
        </div >
        <div>
          <RSButton title='Siguiente jugador' onClick={() => {
            dispatch(setPlayer(playerState + 1 === dif().length ? 0 : playerState + 1));
            setPlayerState(playerState + 1 === names.length ? 0 : playerState + 1)
            setDareState(dareState + 1)
            numbersUsed.push(dareState)
          }} />
        </div>
      </>
    )
  }
  return (
    <div className='game_play_container'>
      {ToPlay()}
    </div>
  )
}

export default GamePlayContainer
