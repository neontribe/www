import React from 'react'
import { COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE } from '../theme'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import Text from './Text'

export default () => (
  <footer>
    <ConstrainedWidth>
      <div className="housekeeping">
        <div>
          <Text alternate>hello@neontribe.co.uk</Text>
        </div>
        <div>
          <Text alternate>@neontribe</Text>
        </div>
        <div>
          <Text alternate>norwich</Text>
        </div>
        <div>
          <Text alternate>exeter</Text>
        </div>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      footer {
        background-color: ${COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE};
        width: 100%;
      }

      .housekeeping {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </footer>
)
