import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import withProviders from '../../utils/withProviders'
import RSLogo, { RSLogoI } from './RSLogo'

export default {
  title: 'components/Logo',
  component: RSLogo
} as ComponentMeta <typeof RSLogo>

const onClickLogo = () => {
  alert('Click')
}

export const DefaultCircledLogo: ComponentStoryObj<typeof RSLogo> = ({ onClick }: RSLogoI) => withProviders(<RSLogo onClick={onClick} />)

DefaultCircledLogo.args = {
  onClick: onClickLogo
}
