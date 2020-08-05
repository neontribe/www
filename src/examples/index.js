import React from 'react'

import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import H from '../components/Heading'
import Section from '../components/Section'
import { InternalLink, ExternalLink } from '../components/Link'
import Carousel from '../components/Carousel'
import VerticalSpacing from '../components/VerticalSpacing'

import steve from '../data/tribers/images/steve.jpg'
import harry from '../data/tribers/images/collins.jpg'
import kat from '../data/tribers/images/Kat.jpg'

export { default as TribeMemberExample } from './TribeMemberExample'
export { default as WorkDescriptionExample } from './WorkDescriptionExample'

export const LinkExamples = () => (
  <ConstrainedWidth>
    <Text size="medium" weight={700}>
      <H>Links</H>
    </Text>

    <div>
      <InternalLink to="/">Gatsby link (InternalLink)</InternalLink>

      <InternalLink button to="/">
        Gatsby button
      </InternalLink>

      <ExternalLink href="/">ExternalLink link</ExternalLink>

      <ExternalLink button href="/">
        ExternalLink button
      </ExternalLink>
    </div>
  </ConstrainedWidth>
)

export const CarouselExamples = () => (
  <ConstrainedWidth>
    <Text size="medium" weight={700}>
      <H>Carousel</H>
    </Text>

    <Section>
      <Carousel>
        <Carousel.Item image={steve}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <VerticalSpacing size={1} />

          <H>Steve</H>
        </Carousel.Item>

        <Carousel.Item image={harry}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <VerticalSpacing size={1} />

          <H>Harry</H>
        </Carousel.Item>

        <Carousel.Item image={kat}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <VerticalSpacing size={1} />

          <H>Kat</H>
        </Carousel.Item>
      </Carousel>
    </Section>
  </ConstrainedWidth>
)
