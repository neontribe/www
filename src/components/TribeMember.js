import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import css from 'styled-jsx/css'

import {
  COLOUR_SECONDARY_BACKGROUND,
  GUTTER_PX,
  CUT_CORNER_PX,
  COLOUR_NEONS,
} from '../theme'
import FlipCard, { CardFront, CardBack } from './FlipCard'
import Heading from './Heading'
import Text from './Text'

let cardN = 0
const nextNeon = () => COLOUR_NEONS[cardN++ % COLOUR_NEONS.length]

const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    flex-grow: 1;
  }
`

const TribeMemberFront = ({
  fluid,
  name,
  headingLevel,
  skills,
  onClick,
  sepColour,
}) => (
  <figure className="tribe-figure" onClick={onClick}>
    <Img
      className={imageStyles.className}
      fluid={fluid}
      alt={`Picture of ${name}`}
    />
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
    {imageStyles.styles}
    <style jsx>{`
      .separator {
        background-color: ${sepColour};
        margin: 0;
        height: ${GUTTER_PX}px;
        border: none;
      }

      .tribe-figure {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
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

const TribeMemberBack = ({ onClick, headingLevel, name, skills, bio }) => (
  <div className="bio" onClick={onClick}>
    <div className="bio-content">
      <div role="presentation">
        <Heading level={headingLevel} size="small">
          <Text type="secondary" heavy>
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
          ${COLOUR_SECONDARY_BACKGROUND} ${CUT_CORNER_PX}px
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

const TribeMember = ({
  fluid,
  name,
  headingLevel,
  skills,
  bio,
  neonSeparatorColour,
}) => {
  const [isFlipped, setFlipped] = useState(false)
  // So this component will remember its colour between re-renders.
  const [initialNeonColour] = useState(neonSeparatorColour || nextNeon())

  return (
    <section className="tribe-member">
      <FlipCard isFlipped={isFlipped}>
        <CardFront>
          <TribeMemberFront
            fluid={fluid}
            name={name}
            headingLevel={headingLevel}
            skills={skills}
            onClick={() => setFlipped(true)}
            sepColour={neonSeparatorColour || initialNeonColour}
          />
        </CardFront>
        <CardBack>
          <TribeMemberBack
            onClick={() => setFlipped(false)}
            headingLevel={headingLevel}
            name={name}
            skills={skills}
            bio={bio}
          />
        </CardBack>
      </FlipCard>
      <style jsx>{`
        .tribe-member {
          height: 100%;
          cursor: pointer;
        }
      `}</style>
    </section>
  )
}

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
