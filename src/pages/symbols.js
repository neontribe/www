import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Hexagon from '../components/Hexagon'
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

const TextVariants = () => (
  <>
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
  </>
)

export default () => (
  <Layout>
    <ConstrainedWidth>
      <Heading level={1} size="large">
        <Text>Symbols</Text>
      </Heading>
      <div className="centered">
        <div>
          <Heading level={2} size="medium">
            <Text>Hexagons</Text>
          </Heading>
          <div className="hex-container">
            <div className="hexagon">
              <Hexagon />
            </div>
            <div className="hexagon">
              <Hexagon src={logo} size={55} />
            </div>
            {COLOUR_NEONS.map(c => (
              <div key={c} className="hexagon">
                <Hexagon size={55} bgColour={c} />
              </div>
            ))}
          </div>
          <div>
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
          </div>
          <div>
            <Heading level={2} size="medium">
              <Text>Text</Text>
            </Heading>
            <div className="text-wrapper">
              <p className="primary">
                <Heading level={3} size="small">
                  <Text>Background primary</Text>
                </Heading>
                <TextVariants />
              </p>
              <p className="primary alternate">
                <Heading level={3} size="small">
                  <Text alternate>Background primary alternate</Text>
                </Heading>
                <TextVariants />
              </p>
              <p className="secondary">
                <Heading level={3} size="small">
                  <Text type="secondary">Background secondary</Text>
                </Heading>
                <TextVariants />
              </p>
            </div>
          </div>
        </div>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      .hex-container {
        display: flex;
        align-items: center;
      }
      .hexagon {
        height: 100px;
      }
      .centered {
        flex-direction: column;
        display: flex;
        justify-content: center;
      }

      .text-wrapper > p {
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
  </Layout>
)
