import React from "react"
import { fireEvent, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { render } from "../../../utils/test.utils"
import "@testing-library/jest-dom"
import GameWelcomeContainer from "./GameWelcomeContainer"

test('Loads image and button', () => {
  render(<GameWelcomeContainer /> )
  const logo = screen.getByRole('img')
  const buttonText = screen.getByText('¡Iniciar el juego!')
  expect(logo).toBeInTheDocument()
  expect(buttonText).toBeInTheDocument()
})