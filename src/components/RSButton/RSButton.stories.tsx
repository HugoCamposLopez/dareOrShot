import RSButton from './RSButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import withProviders from "../../utils/withProviders"

export default {
  title: 'components/Primary Button',
  component: RSButton,
} as ComponentMeta<typeof RSButton>

const onClick = () => {
  alert('Click')
}
export const PrimaryButton: ComponentStory<typeof RSButton> = () => withProviders(
  <RSButton title="Iniciar la peda" onClick={onClick} />
)

export const PrimaryLoadingButton: ComponentStory<typeof RSButton> = () => withProviders(
  <RSButton title="Iniciar la peda" onClick={onClick} loading />
)
