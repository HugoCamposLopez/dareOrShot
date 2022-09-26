import React from 'react'
import { Image } from '@mantine/core'
import './styles.scss'
const HomeContainer = () => {
  return (
    <div className="home-container">
      <div className="img-container">
        <Image src="./logo/logo.png" width={170} height={150} />
      </div>
    </div>
  )
}

export default HomeContainer
