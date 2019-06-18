import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import {
  COLOUR_SECONDARY_BACKGROUND,
  GUTTER_PX,
  CUT_CORNER_PX,
  COLOUR_NEONS,
} from '../theme'
import Heading from './Heading'
import Text from './Text'

let cardN = 0

const nextNeon = () => COLOUR_NEONS[cardN++ % COLOUR_NEONS.length]

const TribeMember = ({
  fluid,
  name,
  headingLevel,
  skills,
  bio,
  neonSeparatorColour = nextNeon(),
}) => (
  <figure className="person-card">
    <Img fluid={fluid} alt={`Picture of ${name}`} />
    <hr className="separator" />
    <figcaption className="name-skills">
      <div className="content">
        <Heading level={headingLevel} size="small">
          <Text type="secondary" heavy>
            {name}
          </Text>
        </Heading>
        <Text type="secondary">{skills.join(' | ')}</Text>
      </div>
    </figcaption>
    <style jsx>{`
      .separator {
        background-color: ${neonSeparatorColour};
        margin: 0;
        height: ${GUTTER_PX}px;
        border: none;
      }

      .person-card {
        margin: 0;
      }

      .name-skills {
        padding: ${GUTTER_PX}px;
        /* Cut the corner off by CUT_CORNER_PX and later on we max-width the content */
        background: linear-gradient(
          -45deg,
          transparent ${CUT_CORNER_PX}px,
          ${COLOUR_SECONDARY_BACKGROUND} ${CUT_CORNER_PX}px
        );
      }

      .content {
        max-width: 80%;
        max-width: calc(100% - ${CUT_CORNER_PX}px);
        margin-right: auto;
      }
    `}</style>
  </figure>
)

TribeMember.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.array,
  bio: PropTypes.string,
  neonSeparatorColour: PropTypes.oneOf(COLOUR_NEONS),
  // Inherited prop types
  fluid: Img.propTypes.fluid,
  headingLevel: Heading.propTypes.level,
}

TribeMember.defaultProps = {
  skills: [],
}

export default TribeMember
