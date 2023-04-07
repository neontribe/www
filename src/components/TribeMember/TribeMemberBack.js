import React from 'react'

import { c_TEXT_DARK, c_SECONDARY_BACKGROUND } from '../../theme'
import H from '../Heading'
import Text from '../Text'
import SocialIcon from '../SocialIcon'
import VerticalSpacing from '../VerticalSpacing'

const TribeMemberBack = ({
  onClick,
  name,
  skills,
  bio,
  social,
  preventTabFocus,
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
          <Text type="secondary" weight={700} size="medium">
            <H>{name}</H>
          </Text>

          <VerticalSpacing size={1} />

          <Text type="secondary" lineHeight={1.2}>
            {skills.join(' | ')}
          </Text>
        </div>
        {!preventTabFocus && <div className="back-content">{bio}</div>}
      </div>

      {socialCount ? (
        <div className="social-icons">
          {socialKeys
            .filter((site) => social[site])
            .map((site) => (
              <SocialIcon
                site={site}
                handle={social[site]}
                count={socialCount}
                key={site}
                preventTabFocus={preventTabFocus}
              />
            ))}
        </div>
      ) : null}

      <style jsx>{`
        .bio {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1rem;
          color: ${c_TEXT_DARK};
          background-color: ${c_SECONDARY_BACKGROUND};
        }

        .bio-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          height: 100%;
          overflow: hidden;
        }

        .back-content {
          margin-top: 1em;
          overflow: auto;
          animation: fadein 4s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .social-icons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-shrink: 0;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}

export default TribeMemberBack
