import { ComponentMeta } from '@storybook/react'
import withProviders from '../../utils/withProviders'
import Layout from './Layout'

export default {
  title: 'components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>

export const LayoutDefault = () =>
  withProviders(<Layout>Este es un children </Layout>)
