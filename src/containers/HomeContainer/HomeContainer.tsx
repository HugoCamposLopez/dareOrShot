import React, { useState } from "react"
import "./styles.scss"
import { useDispatch } from "react-redux"
import { changeState } from "../../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "../../utils/helpers/app.helpers"
import { useNavigate } from "react-router-dom"
import RSLogo from "../../components/RSLogo/RSLogo"
import { RSInputText } from "../../components/RSInputText/RSInputText"
import RSButton from "../../components/RSButton/RSButton"
import { getPost } from "../../services/getComment"
import {
  setEmail,
  setPassword,
  setTOken,
} from "../../store/Slices/UserAuthSlice/UserAuthSlice"
const HomeContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = [
    { name: "Product 123", id: 1 },
    { name: "Product 321", id: 2 },
  ]
  
  const logIn = async (email1: string, password1: string) => {
    try {
      dispatch(setEmail(email1))
      dispatch(setPassword(password1))
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: email, password: password }),
      })
      const conttent = await response.json()
      dispatch(setTOken(conttent.jwt))
      dispatch(changeState(AppStates.welcome))
      navigate("/game", { replace: true })
    } catch (e) {
      console.log(e)
    }
  }
  // const [number, setNumber] = useState<any>("")
  // const [post, setPost] = useState<any>("")
  const navigateToWelcome = () => {
    dispatch(changeState(AppStates.welcome))
    navigate("/game", { replace: true })
  }
  const [email, settEmail] = useState("")
  const [password, settPassword] = useState("")

  
  // const onClickGetPost = async () => {
  //   const { data } = await getPost(number)
  //   setPost({
  //     body: data.body,
  //     id: data.id,
  //     title: data.title,
  //     userId: data.userId,
  //   })
  // }

  return (
    <div className="home-container">
      {/* <RSInputText placeholder="example.jest.1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} />
      <h1>{post.title}</h1>
      <h5>{post.body}</h5>
      <span data-testid="span-id">{post.id}</span> */}
      {/* <RSButton onClick={onClickGetPost} title="example.jest.2"/> */}
      <RSLogo onClick={navigateToWelcome} />
      {/* {products.map((item) => (
        <div style={{borderColor: "black", borderWidth: 1, borderStyle: "solid", textAlign: "center"}} key={item.id} onClick={() => navigate(`/products/${item.id}`,{replace: true})}>
          <h1>Name: {item.name}</h1>
          <h5>Id:{item.id}</h5>
        </div> 
      ))} */}

      <div>
        <form>
          <div>
            <h1>email</h1>
            <input
              placeholder="email"
              name="email"
              onChange={(input) => settEmail(input.target.value)}
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              placeholder="password"
              name="password"
              type={"password"}
               

              onChange={(input) => settPassword(input.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              logIn(email, password)
              e.preventDefault()
            }}>
            Click me
          </button>
        </form>
      </div>
    </div>
  )
}

export default HomeContainer
