import React from 'react'
import Layout from '../../components/Layout/Layout'

const withLayout = (component: React.ReactElement): React.ReactElement => {
  return <Layout>{component}</Layout>
}

export default withLayout
