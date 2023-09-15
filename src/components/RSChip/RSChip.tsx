import React from 'react'
import './styles.scss'
import { Image } from '@mantine/core'
export interface RSChipsProps {
  onClick: (name: string) => void
  user: { name: string|undefined }
}
export function RSChip ({ onClick, user }: RSChipsProps) {
  return (
    <div className='container-chip'>
      <span>{user.name}</span>
      <Image src='../icons/x-symbol.svg' width={10} height={10} className='chip-x-icon' onClick={() => user.name && onClick(user.name)} />
    </div>
  )
}
