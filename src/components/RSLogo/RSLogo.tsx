import React from 'react'
import { Image } from '@mantine/core'
import './styles.scss'

export interface RSLogoI {
  onClick?: () => void
}
const RSLogo = ({ onClick }: RSLogoI) => {
  return (
    <div className='img-container' onClick={onClick}>
      <Image  src='/dareOrShot/logo/logo.png' width={170} height={150} alt='Logo de reto o shot' />
    </div>
  )
}

export default RSLogo
