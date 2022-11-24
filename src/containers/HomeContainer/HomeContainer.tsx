import React, {useState} from "react"
import "./styles.scss"
import { useDispatch } from "react-redux"
import { changeState } from "../../store/Slices/UserStateSlice/UserStateSlice"
import { AppStates } from "../../utils/helpers/app.helpers"
import { useNavigate } from "react-router-dom"
import RSLogo from "../../components/RSLogo/RSLogo"
import { RSInputText } from "../../components/RSInputText/RSInputText"
import RSButton from "../../components/RSButton/RSButton"
import { getPost } from "../../services/getComment"
const HomeContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [number, setNumber] = useState<any>("")
  const [post, setPost] = useState<any>("")
  const navigateToWelcome = () => {
    dispatch(changeState(AppStates.welcome))
    navigate("/game", { replace: true })
  }

  const onClickGetPost = async () => {
    const {data} = await getPost(number)
    setPost({
      body: data.body,
      id: data.id,
      title: data.title,
      userId: data.userId
    })
  }
  
  return (
    <div className="home-container">
      <RSInputText placeholder="example.jest.1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} />
      <h1>{post.title}</h1>
      <h5>{post.body}</h5>
      <span data-testid="span-id">{post.id}</span>
      <RSButton onClick={onClickGetPost} title="example.jest.2"/>
      <RSLogo onClick={navigateToWelcome} />
    </div>
  )
}

export default HomeContainer
