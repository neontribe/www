import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'

export default () => (
  <Layout>
    <ConstrainedWidth></ConstrainedWidth>
    <style jsx>{`
      .centered {
        display: flex;
        align-items: center;
      }
    `}</style>
  </Layout>
)
