import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import Heading from '../components/Heading'

import {
  HexExamples,
  LinkExamples,
  TextExamples,
  CarouselExamples,
  TribeMemberExample,
} from '../examples'

export default () => (
  <Layout>
    <ConstrainedWidth>
      <Heading level={1} size="large">
        <Text type="secondary">Symbols</Text>
      </Heading>
      <div className="centered">
        <HexExamples />
        <LinkExamples />
        <TextExamples />
        <CarouselExamples />
        <TribeMemberExample />
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      .centered {
        flex-direction: column;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </Layout>
)
