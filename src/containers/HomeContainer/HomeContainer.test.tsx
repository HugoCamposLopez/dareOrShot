import React from "react"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { render } from "../../utils/test.utils"
import "@testing-library/jest-dom"
import HomeContainer from "./HomeContainer"

describe('<HomeContainer />' , () => {

  test("Loads page and shows logo", async () => {
    render(<HomeContainer />)
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()
  })
  
  test("Navigate to Welcome Container", async () => {
    render(<HomeContainer />)
    const image = screen.getByRole("img")
    userEvent.click(image)
    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toEqual('/game')
  })
})

