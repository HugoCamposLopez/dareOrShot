import React from "react"
import { findByText, fireEvent, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { intl, render } from "../../utils/test.utils"
import "@testing-library/jest-dom"
import HomeContainer from "./HomeContainer"

describe("<HomeContainer />", () => {
  test("Loads page and shows logo", async () => {
    render(<HomeContainer />)
    //get by alt text
    const image = screen.getByAltText("main-logo")
    //Testing de url
    expect(image).toHaveAttribute("src", "./logo/logo.png")
  })

  test("Navigate to Welcome Container", async () => {
    render(<HomeContainer />)
    //if some item is repeated (img) it will create an array with all items (img)
    const image = screen.getAllByRole("img")
    userEvent.click(image[1])
    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toEqual("/game")
  })

  test("render correctly the input and button", () => {
    render(<HomeContainer />)
    const input = screen.getByPlaceholderText(
      intl.formatMessage({ id: "example.jest.1" })
    )
    const button = screen.getByRole("button")
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test("Type one number and check if the text match", async () => {
    render(<HomeContainer />)
    const input = screen.getByPlaceholderText(
      intl.formatMessage({ id: "example.jest.1" })
    )
    const button = screen.getByRole("button")
    const title = screen.getByRole("heading", { level: 1, hidden: true })
    const description = screen.getByRole("heading", { level: 5, hidden: true })
    const span = screen.getByTestId("span-id")
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(span).toBeInTheDocument()
    userEvent.type(input, "1")
    fireEvent.click(button)
    const titleMock = await screen.findByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    expect(titleMock).toEqual(title)
  })
})
