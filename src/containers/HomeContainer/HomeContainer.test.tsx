import React from "react"
// import { findByText, fireEvent, screen, waitFor } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import {
//   getStore,
//   intl,
//   render,
//   renderWithProviders,
// } from "../../utils/test.utils"
import "@testing-library/jest-dom"
// import {
//   BrowserRouter,
//   MemoryRouter,
//   Route,
//   Routes,
//   unstable_HistoryRouter,
//   useNavigate,
// } from "react-router-dom"
// import { AppStates } from "../../utils/helpers/app.helpers"
// import HomeScreen from "../../screens/HomeScreen/HomeScreen"
// import GameScreen from "../../screens/GameScreen/GameScreen"
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
// import { createBrowserHistory } from "history"
// import ItemId from "../../screens/ItemId/ItemId"
// import { rest } from "msw"
// import { setupServer } from "msw/node"
// import {
//   setEmail,
//   setPassword,
//   setTOken,
// } from "../../store/Slices/UserAuthSlice/UserAuthSlice"
// import { changeState } from "../../store/Slices/UserStateSlice/UserStateSlice"

// const mockedUsedNavigate = jest.fn()

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }))
// export const handlers = [
//   rest.post(`http://localhost:1337/api/auth/local`, (req, res, ctx) => {
//     // const request = req.json()
//     // console.log(request)
//     return res(
//       ctx.status(200),
//       ctx.json({
//         jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcyNzczNjc1LCJleHAiOjE2NzUzNjU2NzV9.jLhC49CYjMewq7UH_0jpC4IwgkGNlElxM_lFEBubhxw",
//         user: {
//           id: 2,
//           username: "Hugo",
//           email: "hugo.campos@gmail.com",
//           provider: "local",
//           confirmed: true,
//           blocked: false,
//           createdAt: "2022-04-15T22:03:33.157Z",
//           updatedAt: "2023-01-03T16:49:33.900Z",
//         },
//       })
//     )
//   }),
// ]
// // const middleware = [thunk]
// // const mockStore = configureMockStore(middleware)

// export const server = setupServer(...handlers)

 describe("<HomeContainer />", () => {
//   // test("Loads page and shows logo", async () => {
//   //   render(<HomeContainer />)
//   //   //get by alt text
//   //   const image = screen.getByAltText("main-logo")
//   //   //Testing de url
//   //   expect(image).toHaveAttribute("src", "./logo/logo.png")
//   // })
//   beforeAll(() => {
//     server.listen()
//   })
//   // Reset any request handlers that we may add during the tests,
//   // so they don't affect other tests.
//   afterEach(() => server.resetHandlers())

//   // Clean up after the tests are finished.
//   afterAll(() => server.close())

//   const preload = {
//     gameconfiguration: {
//       numberOfPlayers: 0,
//     },
//     userState: { stateOfGame: AppStates.initial },
//     userAuth: {
//       email: "",
//       password: "",
//       token: "",
//     },
//     _persist: { rehydrated: true, version: -1 },
//   }

//   // 1.- BrowserRouter -> Componente o la APP completa (funcion sin el browser y aqui pasar todas las pantallas.)
//   // 2.- MemoryRouter -> Flujo imperativo (Rutas necesarias y dónde quieres iniciar) *No funciona el location.pathname
//   // 3.- unstable_HistoryRouter -> Podemos acceder al location.pathname
//   test("Navigate to Welcome Container", async () => {
//     const store = getStore(preload)
//     const history = createBrowserHistory({ window })

//     renderWithProviders(
//       <HistoryRouter history={history}>
//         <Routes>
//           <Route path="/" element={<HomeScreen />} />
//           <Route path="/game" element={<GameScreen />} />
//           <Route path="/products/:id" element={<ItemId />} />
//         </Routes>
//       </HistoryRouter>,
//       { preloadedState: preload }
//     )
//     const email = screen.getByPlaceholderText("email")
//     const password = screen.getByPlaceholderText("password")
//     const button = screen.getByRole("button", { name: "Click me" })
//     expect(email).toBeInTheDocument()
//     expect(password).toBeInTheDocument()
//     expect(button).toBeInTheDocument()

//     const logIn = async (email1: string, password1: string) => {
//       try {
//         store.dispatch(setEmail(email1))
//         store.dispatch(setPassword(password1))
//         const response = await fetch("http://localhost:1337/api/auth/local", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ identifier: email1, password: password1 }),
//         })
//         const conttent = await response.json()
//         store.dispatch(setTOken(conttent.jwt))
//         store.dispatch(changeState(AppStates.welcome))
//         mockedUsedNavigate("/game", { replace: true })
//         return conttent
//       } catch (e) {
//         console.log(e)
//       }
//     }

//     const response = await logIn("hugo.campos@gmail.com", "Admin123*")
//     await waitFor(async () => {
//       console.log(store.getState())
//       console.log(response.jwt)
//       console.log(history.location.pathname)
//     })
//     // await userEvent.type(email, "hugo.campos@gmail.com")
//     // await userEvent.type(password, "Admin123*")
//     // fireEvent.click(button)
//     expect(mockedUsedNavigate).toBeCalled()
//     screen.debug()
//   })

  // it("Navigate to product id screen", async () => {
  //   render(
  //     <BrowserRouter>
  //       <HomeScreen />
  //     </BrowserRouter>
  //   )
  //   const product = screen.getByText("Name: Product 123")
  //   userEvent.click(product)
  //   // eslint-disable-next-line no-restricted-globals
  //   expect(global.window.location.pathname).toEqual("/products/1")
  //   screen.debug()
  //   const button = await screen.findByText("1")
  //   expect(button).toBeInTheDocument()
  // })

  // expect(location.pathname).toEqual("/")
  //   test("render correctly the input and button", () => {
  //     render(<HomeContainer />)
  //     const input = screen.getByPlaceholderText(
  //       intl.formatMessage({ id: "example.jest.1" })
  //     )
  //     const button = screen.getByRole("button")
  //     expect(input).toBeInTheDocument()
  //     expect(button).toBeInTheDocument()
  //   })

  //   test("Type one number and check if the text match", async () => {
  //     render(<HomeContainer />)
  //     const input = screen.getByPlaceholderText(
  //       intl.formatMessage({ id: "example.jest.1" })
  //     )
  //     const button = screen.getByRole("button")
  //     const title = screen.getByRole("heading", { level: 1, hidden: true })
  //     const description = screen.getByRole("heading", { level: 5, hidden: true })
  //     const span = screen.getByTestId("span-id")
  //     expect(title).toBeInTheDocument()
  //     expect(description).toBeInTheDocument()
  //     expect(span).toBeInTheDocument()
  //     userEvent.type(input, "1")
  //     fireEvent.click(button)
  //     const titleMock = await screen.findByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
  //     expect(titleMock).toEqual(title)
  //   })
})
