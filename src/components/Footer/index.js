import React from 'react'
import PropTypes from 'prop-types'
import { c_PRIMARY_BACKGROUND_ALTERNATIVE, GUTTER_PX } from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Text from '../Text'
import { ExternalLink } from '../Link'
import Heading from '../Heading'
import GatsbyLink from 'gatsby-link'
import twitterlogo from './twitterlogo.svg'

const mapListItems = children =>
  React.Children.map(children, child => {
    if (child.type === 'li') {
      return child
    }

    return <li>{child}</li>
  })

const HousekeepingList = ({ children, title }) => (
  <div className="housekeeping-list">
    {title}
    {children && <ul className="heading-list">{mapListItems(children)}</ul>}

    <style jsx>{`
      .heading-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .housekeeping-list {
        margin-top: ${GUTTER_PX * 2}px;
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
            <ExternalLink href="mailto:hello@neontribe.co.uk">
              <Text lineHeight={2} alternate weight={500}>
                hello@neontribe.co.uk
              </Text>
            </ExternalLink>
          }
        >
          <li>
            <ExternalLink href="tel:0845 689 0896">
              <Text lineHeight={2} alternate size="small">
                0845 689 0896
              </Text>
            </ExternalLink>
          </li>
          <li>
            <GatsbyLink to="/privacy-policy" title={`Link to privacy policy`}>
              <Text lineHeight={2} alternate underline size="small">
                Privacy Policy
              </Text>
            </GatsbyLink>
          </li>
        </HousekeepingList>
        <HousekeepingList
          title={
            <ExternalLink href="http://twitter.com/neontribe">
              <Text alternate weight={500}>
                <img
                  src={twitterlogo}
                  className="twitterlogo"
                  role="presentation"
                />{' '}
                @neontribe
              </Text>
            </ExternalLink>
          }
        />
        <HousekeepingList
          title={
            <Text alternate weight={500}>
              Norwich
            </Text>
          }
        >
          <li>
            <address>
              <Text alternate size="small">
                21 Colegate
                <br />
                Norwich
                <br />
                NR3 1BN
              </Text>
            </address>
          </li>
        </HousekeepingList>
        <HousekeepingList
          title={
            <Text alternate weight={500}>
              Exeter
            </Text>
          }
        >
          <li>
            <address>
              <Text alternate size="small">
                The Generator Quayhouse
                <br />
                Exeter
                <br />
                EX2 4AN
              </Text>
            </address>
          </li>
        </HousekeepingList>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      footer {
        background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
        padding: ${GUTTER_PX * 7}px 0;
      }

      .housekeeping {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
      }

      .twitterlogo {
        display: inline-block;
        height: 1rem;
      }
    `}</style>
  </footer>
)
