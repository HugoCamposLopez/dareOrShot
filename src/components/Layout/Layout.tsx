import React from 'react'
import { Image } from '@mantine/core'
import './styles.scss'
export interface LayoutProps {
  children?: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <div className="img-logo">
        <Image src="./logo/logo.png" width={110} height={100} />
      </div>
      {children}
    </div>
  )
}

export default Layout
