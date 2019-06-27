import React from 'react'
import PropTypes from 'prop-types'
import { c_PRIMARY_BACKGROUND_ALTERNATIVE, GUTTER_PX } from '../theme'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import Text from './Text'
import { ExternalLink } from './Link'
import Heading from './Heading'
import GatsbyLink from 'gatsby-link'

const mapListItems = children =>
  React.Children.map(children, child => {
    if (child.type === 'li') {
      return child
    }

    return <li>{child}</li>
  })

const HousekeepingList = ({ children, title }) => (
  <div>
    <Heading level={3}>
      <Text transparent size="normal">
        {title}
      </Text>
    </Heading>
    {children && <ul className="heading-list">{mapListItems(children)}</ul>}

    <style jsx>{`
      .heading-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

HousekeepingList.propTypes = {
  children: PropTypes.node,
}

export default () => (
  <footer>
    <ConstrainedWidth>
      <div className="housekeeping">
        <HousekeepingList
          title={
            <ExternalLink href="mailto://hello@neontribe.co.uk" alternate>
              <Text alternate heavy>
                hello@neontribe.co.uk
              </Text>
            </ExternalLink>
          }
        >
          <Text alternate>
            <li>0845 689 0896</li>
          </Text>
          <GatsbyLink to="/" title={`Link to privacy policy`}>
            Privacy Policy
          </GatsbyLink>
        </HousekeepingList>
        <HousekeepingList
          title={
            <ExternalLink href="http://twitter.com/neontribe" alternate>
              <Text alternate heavy>
                @neontribe
              </Text>
            </ExternalLink>
          }
        />
        <HousekeepingList
          title={
            <Text alternate heavy>
              Norwich
            </Text>
          }
        >
          <Text alternate size="small">
            <li>21 Colegate</li>
            <li>Norwich </li>
            <li>NR3 1BN</li>
          </Text>
        </HousekeepingList>
        <HousekeepingList
          title={
            <Text alternate heavy>
              Exeter
            </Text>
          }
        >
          <Text alternate size="small">
            <li>21 Colegate</li>
            <li>Norwich </li>
            <li>NR3 1BN</li>
          </Text>
        </HousekeepingList>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      footer {
        background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
        padding: ${GUTTER_PX * 10}px 0;
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
