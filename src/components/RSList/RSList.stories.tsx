import { ComponentMeta } from '@storybook/react'
import withProviders from '../../utils/withProviders'
import RSList from './RSList'

export default {
  title: 'components/RSList',
  component: RSList
} as ComponentMeta<typeof RSList>

const lists = [{ name: 'Hugo' }, { name: 'Erik' }, { name: 'Yuri' }]
const alerItemName = (name: string) => {
  console.log(name)
}
export const PrimaryList = () => withProviders(<RSList list={lists} onClick={alerItemName} />)
