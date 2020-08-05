import React from 'react'

import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Text from '../Text'
import { InternalLink, ExternalLink } from '../Link'

import { breakpoint } from '../../theme'

import twitterlogo from './twitterlogo.svg'

export default () => (
  <ConstrainedWidth>
    <div className="container">
      <Text lineHeight={2}>
        <footer>
          <div className="row addresses">
            <div>
              <Text lineHeight={1.5}>
                <address>
                  21 Colegate
                  <br />
                  Norwich
                  <br />
                  NR3 1BN
                </address>
              </Text>
            </div>

            <div>
              <Text lineHeight={1.5}>
                <address>
                  Kaleider Studios
                  <br />
                  45 Preston Street
                  <br />
                  Exeter EX1 1DF
                </address>
              </Text>
            </div>
          </div>

          <div className="row">
            <div>
              <ExternalLink href="mailto:hello@neontribe.co.uk">
                hello@neontribe.co.uk
              </ExternalLink>
            </div>

            <div>
              <ExternalLink href="tel:0845 689 0896">
                0845 689 0896
              </ExternalLink>
            </div>

            <div>
              <ExternalLink href="http://twitter.com/neontribe">
                <img src={twitterlogo} className="twitterlogo" alt="" />{' '}
                @neontribe
              </ExternalLink>
            </div>

            <div>
              <Text lineHeight={2}>
                <InternalLink
                  to="/privacy-policy"
                  title={`Link to privacy policy`}
                >
                  Privacy Policy
                </InternalLink>
              </Text>
            </div>
          </div>
        </footer>
      </Text>
    </div>

    <style jsx>{`
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
      }

      .container {
      }

      .row > * {
      }

      .row:last-child {
        flex-direction: column;
      }

      .addresses > * {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .twitterlogo {
        display: inline-block;
        height: 1rem;
      }

      @media (${breakpoint('sm')}) {
        .row:last-child {
          flex-direction: row;
        }

        .row {
          margin-left: -1rem;
          margin-right: -1rem;
        }

        .row > * {
          margin-left: 1rem;
          margin-right: 1rem;
        }

        .addresses {
          justify-content: center;
        }
      }
    `}</style>
  </ConstrainedWidth>
)
