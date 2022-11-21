import React from 'react'
import { Image } from '@mantine/core'
import './styles.scss'

export interface RSLogoI {
  onClick?: () => void
}
const RSLogo = ({ onClick }: RSLogoI) => {
  return (
    <div className="img-container" onClick={onClick} data-testid="logo-image">
      <Image src="./logo/logo.png" width={170} height={150} />
    </div>
  )
}

export default RSLogo
