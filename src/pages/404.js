import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'

const NotFoundPage = () => (
  <Layout>
    <ConstrainedWidth>
      <div className="centered">
        <Heading level={1}>
          <Text>404 Page Not Found</Text>
        </Heading>
        <p>
          <Text size="large">
            <span className="italic">
              ++?????++ Out of Cheese Error. Redo From Start.
            </span>
          </Text>
        </p>
      </div>
    </ConstrainedWidth>

    <style jsx>{`
      .centered {
        text-align: center;
        display: flex;
        flex-direction: column-reverse;
      }
      .italic {
        font-style: italic;
      }
    `}</style>
  </Layout>
)

export default NotFoundPage
