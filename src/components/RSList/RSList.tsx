import { Image } from "@mantine/core"
import React from "react"
import "./styles.scss"

interface RSListProps {
  list: { name: string|undefined }[] 
  onClick: (item: string) => void
}

const RSList = ({ list, onClick }: RSListProps) => {
  return (
    <>
      {list &&
        list.map((item) => (
          <div className="list-container">
            <div className="x-symbol-container" onClick={() => item.name && onClick(item.name)}>
              <Image className="img-item" src="../icons/x-symbol.svg" width={10} height={10} />
            </div>
            <span>{item.name? item.name : null}</span>
          </div>
        ))}
    </>
  )
}

export default RSList
