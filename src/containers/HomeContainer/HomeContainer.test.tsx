import React from "react"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { render } from "../../utils/test.utils"
import "@testing-library/jest-dom"
import HomeContainer from "./HomeContainer"
import GameScreen from "../../screens/GameScreen/GameScreen"

test("Loads page and shows logo", async () => {
  render(<HomeContainer />)
  const image = screen.getByTestId("logo-image")
  expect(image).toBeInTheDocument()
})

test("Navigate to Welcome Container", async () => {
  render(<HomeContainer />)
  const image = screen.getByTestId("logo-image")
  userEvent.click(image)
})
