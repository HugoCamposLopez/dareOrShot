import React from "react"
import { screen } from "@testing-library/react"
import RSButton from "./RSButton"
import { render, intl } from "../../utils/test.utils"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

const onClick = jest.fn()
test('render button', async () => {
  render(<RSButton  title="example.hello" onClick={onClick} />)
  const button = screen.getByRole('button')
  const buttonText = await screen.findByText(intl.formatMessage({id:"example.hello"}))
  userEvent.click(button)
  expect(buttonText).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(onClick).toBeCalled()
  })