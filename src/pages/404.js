import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import PageMeta from '../components/PageMeta'

const NotFoundPage = () => (
  <Layout>
    <PageMeta title="Not Found" />
    <ConstrainedWidth>
      <div className="accessibility-centered">
        <h1>404 Page Not Found</h1>

        <p>
          <Text size="large">
            <i>++?????++ Out of Cheese Error. Redo From Start.</i>
          </Text>
        </p>
      </div>
    </ConstrainedWidth>

    <style jsx>{`
      .accessibility-centered {
        text-align: center;
        display: flex;
        flex-direction: column-reverse;
      }
    `}</style>
  </Layout>
)

export default NotFoundPage
