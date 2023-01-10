import { UnstyledButton, Loader } from '@mantine/core'
import React from 'react'
import { useIntl } from 'react-intl'
import './styles.scss'

export interface RSButtonProps {
  title: string
  onClick?: () => void
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
  const intl = useIntl()
  return (
    <UnstyledButton
      className={`button-principal ${!isDisable ? "" : "isValid"}`}
      color={'white'}
      onClick={onClick}
      type={sumbit ? 'submit' : 'button'}
      disabled={isDisable || loading}
    >
      {loading ? (
        <Loader size={'sm'} />
      ) : (
        <span>{intl.formatMessage({ id: title })}</span>
      )}
    </UnstyledButton>
  )
}

export default RSButton
