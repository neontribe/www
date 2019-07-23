import React from 'react'

import Hexagon from '../components/Hexagon'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import logo from '../components/Logo/logo.svg'
import Heading from '../components/Heading'
import HexagonGrid from '../components/HexagonGrid'
import {
  c_NEONS,
  c_PRIMARY_BACKGROUND,
  c_PRIMARY_BACKGROUND_ALTERNATIVE,
  c_SECONDARY_BACKGROUND,
} from '../theme'
import { InternalLink, ExternalLink } from '../components/Link'
import Carousel from '../components/Carousel'
import VerticalSpacing from '../components/VerticalSpacing'
import Squiggle from '../components/Squiggle'

import steve from '../data/tribers/images/steve.jpg'
import harry from '../data/tribers/images/collins.jpg'
import kat from '../data/tribers/images/Kat.jpg'

export { default as TribeMemberExample } from './TribeMemberExample'
export { default as WorkDescriptionExample } from './WorkDescriptionExample'

const TextVariants = () => (
  <ConstrainedWidth>
    <Text>Primary Text</Text>
    <Text alternate>Primary alternate Text</Text>
    <Text type="secondary">Secondary Text</Text>
    <Text weight={700}>Heavy Primary Text</Text>
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
    <Heading level={2}>
      <Text size="medium" weight={700}>
        Text
      </Text>
    </Heading>
    <div className="text-wrapper">
      <div className="primary">
        <Heading level={3}>
          <Text size="normal">Background primary</Text>
        </Heading>
        <TextVariants />
      </div>
      <div className="primary alternate">
        <Heading level={3}>
          <Text size="normal" alternate>
            Background primary alternate
          </Text>
        </Heading>
        <TextVariants />
      </div>
      <div className="secondary">
        <Heading level={3}>
          <Text size="normal" type="secondary">
            Background secondary
          </Text>
        </Heading>
        <TextVariants />
      </div>
    </div>
    <style jsx>{`
      .text-wrapper > div {
        padding: 1rem;
      }
      .text-wrapper .primary {
        background-color: ${c_PRIMARY_BACKGROUND};
      }
      .text-wrapper .primary.alternate {
        background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
      }
      .text-wrapper .secondary {
        background-color: ${c_SECONDARY_BACKGROUND};
      }
    `}</style>
  </ConstrainedWidth>
)

export const HexExamples = () => (
  <ConstrainedWidth>
    <Heading level={2}>
      <Text size="medium" weight={700}>
        Hexagons
      </Text>
    </Heading>
    <div className="hex-container">
      <div className="hexagon">
        <Hexagon />
      </div>
      {c_NEONS.map(c => (
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

export const HexagonGridExamples = () => (
  <ConstrainedWidth>
    <Heading level={2}>
      <Text size="medium" weight={700}>
        Hexagon Grid
      </Text>
    </Heading>
    <HexagonGrid rows={2}>
      <Hexagon bgColour={c_NEONS[0]} />
      <Hexagon bgColour={c_NEONS[1]} />
      <Hexagon bgColour={c_NEONS[2]} />
      <Hexagon bgColour={c_NEONS[3]} />
    </HexagonGrid>
  </ConstrainedWidth>
)

export const LinkExamples = () => (
  <ConstrainedWidth>
    <Heading level={2}>
      <Text size="medium" weight={700}>
        Links
      </Text>
    </Heading>
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
    <Heading level={2}>
      <Text size="medium" weight={700}>
        Carousel
      </Text>
    </Heading>
    <Carousel>
      <Carousel.Item image={steve}>
        <Text type="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <VerticalSpacing size={1} />
        <Heading level={3}>
          <Text type="secondary" weight={700}>
            Steve
          </Text>
        </Heading>
      </Carousel.Item>
      <Carousel.Item image={harry}>
        <Text type="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <VerticalSpacing size={1} />
        <Heading level={3}>
          <Text type="secondary" weight={700}>
            Harry
          </Text>
        </Heading>
      </Carousel.Item>
      <Carousel.Item image={kat}>
        <Text type="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <VerticalSpacing size={1} />
        <Heading level={3}>
          <Text type="secondary" weight={700}>
            Kat
          </Text>
        </Heading>
      </Carousel.Item>
    </Carousel>
  </ConstrainedWidth>
)

export const SquiggleExample = () => (
  <ConstrainedWidth>
    <Heading level={2}>
      <Text size="medium" weight={700}>
        Squiggle
      </Text>
    </Heading>
    <Squiggle color={c_NEONS[0]} repeats={8} />
  </ConstrainedWidth>
)
