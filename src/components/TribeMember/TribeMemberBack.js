import React from 'react'

import {
  c_SECONDARY_BACKGROUND,
  GUTTER_PX,
  CUT_CORNER_PX,
  SOCIAL_MARGIN,
} from '../../theme'
import Heading from '../Heading'
import Text from '../Text'
import SocialIcon from '../SocialIcon'

const TribeMemberBack = ({
  onClick,
  headingLevel,
  name,
  skills,
  bio,
  social,
}) => {
  const socialKeys = social ? Object.keys(social) : []
  var socialCount = 0

  for (var site in social) {
    if (social[site]) socialCount++
  }

  return (
    <div className="bio" onClick={onClick}>
      <div className="bio-content">
        <div role="presentation">
          <Heading level={headingLevel}>
            <Text type="secondary" weight={700} size="medium">
              {name}
            </Text>
          </Heading>
          <Text type="secondary">{skills.join(' | ')}</Text>
        </div>
        <div className="back-content">{bio}</div>
      </div>
      <div className="social-icons">
        {socialCount > 0
          ? socialKeys.map(site => {
              return social[site] ? (
                <SocialIcon
                  site={site}
                  handle={social[site]}
                  count={socialCount}
                  key={site}
                />
              ) : (
                ''
              )
            })
          : ''}
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
          height: calc(
            100% - ${CUT_CORNER_PX}px - ${socialCount ? SOCIAL_MARGIN * 2 : 0}px
          );
          display: flex;
          flex-direction: column;
        }
        .back-content {
          margin: 0;
          margin-top: ${2 * GUTTER_PX}px;
          flex-grow: 1;
          overflow: auto;
        }

        .social-icons {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: ${socialCount ? SOCIAL_MARGIN : 0}px 0;
        }
      `}</style>
    </div>
  )
}

export default TribeMemberBack
