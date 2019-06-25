import React from 'react'

import { c_SECONDARY_BACKGROUND, GUTTER_PX, CUT_CORNER_PX } from '../../theme'
import Heading from '../Heading'
import Text from '../Text'

const TribeMemberBack = ({ onClick, headingLevel, name, skills, bio }) => (
  <div className="bio" onClick={onClick}>
    <div className="bio-content">
      <div role="presentation">
        <Heading level={headingLevel} size="small">
          <Text type="secondary" heavy size="medium">
            {name}
          </Text>
        </Heading>
        <Text type="secondary">{skills.join(' | ')}</Text>
      </div>
      <p className="back-content">
        <Text type="secondary">{bio}</Text>
      </p>
    </div>
    <style jsx>{`
      .bio {
        height: 100%;
        padding: ${GUTTER_PX}px;
        /* Cut the corner off by CUT_CORNER_PX and later on we max-width the content */
        background: linear-gradient(
          45deg,
          transparent ${CUT_CORNER_PX}px,
          ${c_SECONDARY_BACKGROUND} ${CUT_CORNER_PX}px
        );
      }

      .bio-content {
        height: 100%;
        height: calc(100% - ${CUT_CORNER_PX}px);
        display: flex;
        flex-direction: column;
      }
      .back-content {
        margin: 0;
        margin-top: ${2 * GUTTER_PX}px;
        flex-grow: 1;
        overflow: auto;
      }
    `}</style>
  </div>
)

export default TribeMemberBack
