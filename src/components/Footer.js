import React from 'react'
import { COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE } from '../theme'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import Text from './Text'
import { ExternalLink } from './Link'
import Heading from './Heading'

const HousekeepingList = ({ children, title }) => (
  <div>
    <Heading level={3} size="small">
      {title}
    </Heading>
    <ul className="heading-list">{children}</ul>

    <style jsx>{`
      .heading-list {
        list-style: none;
        margin: 0;
      }
    `}</style>
  </div>
)

export default () => (
  <footer>
    <ConstrainedWidth>
      <div className="housekeeping">
        <HousekeepingList
          title={
            <ExternalLink href="mailto://hello@neontribe.co.uk" alternate>
              hello@neontribe.co.uk
            </ExternalLink>
          }
        />
        <HousekeepingList
          title={
            <ExternalLink href="http://twitter.com" alternate>
              @neontribe
            </ExternalLink>
          }
        />
        <HousekeepingList
          title={
            <Text alternate heavy>
              Norwich
            </Text>
          }
        />
        <HousekeepingList
          title={
            <Text alternate heavy>
              Exeter
            </Text>
          }
        />
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      footer {
        background-color: ${COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE};
      }

      .housekeeping {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
      }
    `}</style>
  </footer>
)
