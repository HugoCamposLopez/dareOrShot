import RSButton from './RSButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Primary Button',
  component: RSButton,
} as ComponentMeta<typeof RSButton>

const onClick = () => {
  alert('Click')
}
export const PrimaryButton: ComponentStory<typeof RSButton> = () => (
  <RSButton title="Iniciar la peda" onClick={onClick} />
)

export const PrimaryLoadingButton: ComponentStory<typeof RSButton> = () => (
  <RSButton title="Iniciar la peda" onClick={onClick} loading />
)
