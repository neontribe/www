import React from 'react'
import PropTypes from 'prop-types'
import { COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE } from '../theme'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import Text from './Text'
import { ExternalLink } from './Link'
import Heading from './Heading'

const mapListItems = children =>
  React.Children.map(children, child => {
    if (child.type === 'li') {
      return child
    }

    return <li>{child}</li>
  })

const HousekeepingList = ({ children, title }) => (
  <div>
    <Heading level={3} size="small">
      {title}
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
        >
          <li>some content</li>
          <div>not an li!</div>
        </HousekeepingList>
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