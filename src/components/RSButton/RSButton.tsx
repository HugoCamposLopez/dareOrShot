import { UnstyledButton, Loader } from '@mantine/core'
import React from 'react'
import './styles.scss'

export interface RSButtonProps {
  title: string
  onClick: () => void
  sumbit?: boolean
  loading?: boolean
  isDisable?: boolean
}

const RSButton = ({
  title,
  onClick,
  sumbit,
  loading,
  isDisable,
}: RSButtonProps) => {
  return (
    <UnstyledButton
      className="button-principal"
      color={'white'}
      onClick={onClick}
      type={sumbit ? 'submit' : 'button'}
      disabled={isDisable || loading}
    >
      {loading ? <Loader size={'sm'} /> : <span>{title}</span>}
    </UnstyledButton>
  )
}

export default RSButton
