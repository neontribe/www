import React from 'react'

import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import Heading from '../components/Heading'
import Squiggle from '../components/Squiggle'
import Link from '../components/Link'
import { WorkSummary } from '../components/WorkDescription'

import steve from '../images/tribe-steve.jpg'
import harry from '../images/tribe-harry.jpg'
import kat from '../images/tribe-kat.jpg'
import SquiggleSeparator from '../components/SquiggleSeparator'

const IndexPage = () => (
  <Layout>
    <ConstrainedWidth>
      <div style={{ textAlign: 'center' }}>
        <Heading level={1}>
          <Text heavy size="xlarge">
            We solve problems
          </Text>
        </Heading>
        <p>
          <Text size="medium">
            Neontribe is a digital agency working in user research, software
            development and design. We're agile by instinct, and user-centred in
            our practise. We work together to identify and deliver on user need.
          </Text>
        </p>
      </div>
      <SquiggleSeparator />

      <div style={{ textAlign: 'center' }}>
        <Heading level={2}>
          <Text heavy size="large">
            The tribe
          </Text>
        </Heading>
      </div>
      <Carousel>
        <Carousel.Item image={steve}>
          <Text type="secondary" size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <VerticalSpacing size={1} />
          <Heading level={3} size="medium">
            <Text size="medium" type="secondary" heavy>
              Rose
            </Text>
          </Heading>
        </Carousel.Item>
        <Carousel.Item image={harry}>
          <Text type="secondary" size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ma minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <VerticalSpacing size={1} />
          <Heading level={3} size="medium">
            <Text size="medium" type="secondary" heavy>
              Katja
            </Text>
          </Heading>
        </Carousel.Item>
        <Carousel.Item image={kat}>
          <Text type="secondary" size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <VerticalSpacing size={1} />
          <Heading level={3}>
            <Text size="medium" type="secondary" heavy>
              Rob
            </Text>
          </Heading>
        </Carousel.Item>
      </Carousel>
      <div style={{ textAlign: 'center' }}>
        <Link button to="/">
          Meet the tribe
        </Link>
      </div>

      <SquiggleSeparator />

      <div style={{ textAlign: 'center' }}>
        <Heading level={1}>
          <Text size="large" heavy>
            What we're doing
          </Text>
        </Heading>
        {/* <WorkSummary /> */}
      </div>
    </ConstrainedWidth>
  </Layout>
)

export default IndexPage
