/* eslint-disable no-unused-vars */
export const numberOfPlayers = [
  { value: '2', label: '2 jugadores' },
  { value: '3', label: '3 jugadores' },
  { value: '4', label: '4 jugadores' },
  { value: '5', label: '5 jugadores' },
  { value: '6', label: '6 jugadores' }
]

export const enum AppStates{
  initial = 0,
  welcome = 1,
  rules = 2,
  nameOfPlayers = 3,
  typeOfGame = 4,
  daresOrShots = 5
}
