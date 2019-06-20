import React from 'react'

import Hexagon from '../components/Hexagon'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import logo from '../components/Logo/logo.svg'
import Heading from '../components/Heading'
import {
  COLOUR_NEONS,
  COLOUR_PRIMARY_BACKGROUND,
  COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE,
  COLOUR_SECONDARY_BACKGROUND,
} from '../theme'
import Link, { ExternalLink } from '../components/Link'
import Carousel from '../components/Carousel'
import VerticalSpacing from '../components/VerticalSpacing'
import Squiggle from '../components/Squiggle'

import steve from '../images/tribe-steve.jpg'
import harry from '../images/tribe-harry.jpg'
import kat from '../images/tribe-kat.jpg'

export { default as TribeMemberExample } from './TribeMemberExample'
export { default as WorkDescriptionExample } from './WorkDescriptionExample'

const TextVariants = () => (
  <ConstrainedWidth>
    <Text>Primary Text</Text>
    <Text alternate>Primary alternate Text</Text>
    <Text type="secondary">Secondary Text</Text>
    <Text heavy>Heavy Primary Text</Text>
    <Text type="primary" transparent>
      Transparent Primary Text
    </Text>
    <Text type="secondary" transparent>
      Transparent Secondary Text
    </Text>
  </ConstrainedWidth>
)

export const TextExamples = () => (
  <ConstrainedWidth>
    <Heading level={2} size="medium">
      <Text>Text</Text>
    </Heading>
    <div className="text-wrapper">
      <div className="primary">
        <Heading level={3} size="small">
          <Text>Background primary</Text>
        </Heading>
        <TextVariants />
      </div>
      <div className="primary alternate">
        <Heading level={3} size="small">
          <Text alternate>Background primary alternate</Text>
        </Heading>
        <TextVariants />
      </div>
      <div className="secondary">
        <Heading level={3} size="small">
          <Text type="secondary">Background secondary</Text>
        </Heading>
        <TextVariants />
      </div>
    </div>
    <style jsx>{`
      .text-wrapper > div {
        padding: 1rem;
      }
      .text-wrapper .primary {
        background-color: ${COLOUR_PRIMARY_BACKGROUND};
      }
      .text-wrapper .primary.alternate {
        background-color: ${COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE};
      }
      .text-wrapper .secondary {
        background-color: ${COLOUR_SECONDARY_BACKGROUND};
      }
    `}</style>
  </ConstrainedWidth>
)

export const HexExamples = () => (
  <ConstrainedWidth>
    <Heading level={2} size="medium">
      <Text>Hexagons</Text>
    </Heading>
    <div className="hex-container">
      <div className="hexagon">
        <Hexagon />
      </div>
      {COLOUR_NEONS.map(c => (
        <div key={c} className="hexagon">
          <Hexagon src={logo} size={55} bgColour={c} />
        </div>
      ))}
    </div>
    <style jsx>{`
      .hex-container {
        display: flex;
        align-items: center;
      }
      .hexagon {
        height: 100px;
      }
    `}</style>
  </ConstrainedWidth>
)

export const LinkExamples = () => (
  <ConstrainedWidth>
    <Heading level={2} size="medium">
      <Text>Links</Text>
    </Heading>
    <div>
      <Link to="/">Gatsby link</Link>
      <Link button to="/">
        Gatsby button
      </Link>
      <ExternalLink href="/">ExternalLink link</ExternalLink>
      <ExternalLink button href="/">
        ExternalLink button
      </ExternalLink>
    </div>
  </ConstrainedWidth>
)

export const CarouselExamples = () => (
  <ConstrainedWidth>
    <Heading level={2} size="medium">
      <Text>Carousel</Text>
    </Heading>
    <Carousel>
      <Carousel.Item image={steve}>
        <Text type="secondary" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <VerticalSpacing size={1} />
        <Heading level={3} size="medium">
          Steve
        </Heading>
      </Carousel.Item>
      <Carousel.Item image={harry}>
        <Text type="secondary" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <VerticalSpacing size={1} />
        <Heading level={3} size="medium">
          Harry
        </Heading>
      </Carousel.Item>
      <Carousel.Item image={kat}>
        <Text type="secondary" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <VerticalSpacing size={1} />
        <Heading level={3} size="medium">
          Kat
        </Heading>
      </Carousel.Item>
    </Carousel>
  </ConstrainedWidth>
)

export const SquiggleExample = () => (
  <ConstrainedWidth>
    <Heading level={2} size="medium">
      <Text>Squiggle</Text>
    </Heading>
    <Squiggle color={COLOUR_NEONS[0]} repeats={8} />
  </ConstrainedWidth>
)
