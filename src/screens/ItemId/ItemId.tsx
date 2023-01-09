import React from "react"
import { useParams } from "react-router-dom"

const ItemId = () => {
  const { id } = useParams()
  return <div>
    <h1>The id is</h1>
    {id && id}</div>
}

export default ItemId
