import React from "react"
import { screen } from "@testing-library/react"
import RSButton from "./RSButton"
import { render, intl } from "../../utils/test.utils"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

describe("Button functionality", () => {
  const onClick = jest.fn()
  
  test("render button", () => {
    render(<RSButton title="example.hello" onClick={onClick} />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  test("Label is correct", () => {
    render(<RSButton title="example.hello" onClick={onClick} />)
    //const buttonLabel = screen.getByText(/hola mundo/i)
     const buttonLabel = screen.getByText(intl.formatMessage({id: "example.hello"}))
    expect(buttonLabel).toBeInTheDocument()
    expect(buttonLabel).toHaveTextContent(intl.formatMessage({id: "example.hello"}))
  })

  test("Button onClick working", () => {
    render(<RSButton title="example.hello" onClick={onClick} />)
    const button = screen.getByRole("button")
    userEvent.click(button)
    expect(onClick).toBeCalled()
  })
})

