import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'

import * as examples from '../examples'

export default () => (
  <Layout>
    <ConstrainedWidth>
      <Text weight={700} size="large">
        <h1>Symbols</h1>
      </Text>
    </ConstrainedWidth>

    {/* Sort keys to ensure order is consistent between static client-side js */}
    {Object.keys(examples)
      .sort()
      .map((key) => React.createElement(examples[key], { key }))}
  </Layout>
)
