import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image/withIEPolyfill'
import ShimlessImg from 'gatsby-image'

import { c_NEONS } from '../../theme'
import FlipCard, { CardFront, CardBack } from '../FlipCard'
import Heading from '../Heading'
import TribeMemberFront from './TribeMemberFront'
import TribeMemberBack from './TribeMemberBack'

let neonN = 0
const nextNeon = () => c_NEONS[neonN++ % c_NEONS.length]

const TribeMember = ({
  image,
  grayscaleImage,
  name,
  headingLevel,
  skills,
  bio,
  social,
  neonSeparatorColour,
}) => {
  const [isFlipped, setFlipped] = useState(false)
  // So this component will remember its colour between re-renders.
  const [initialNeonColour] = useState(neonSeparatorColour || nextNeon())

  return (
    <section className="tribe-member">
      <button
        className="visually-hidden"
        type="button"
        onClick={() => setFlipped(!isFlipped)}
      >
        Flip the person card
      </button>
      <FlipCard isFlipped={isFlipped}>
        <CardFront>
          <TribeMemberFront
            image={image}
            grayscaleImage={grayscaleImage}
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
            social={social}
          />
        </CardBack>
      </FlipCard>

      <style jsx>{`
        .tribe-member {
          height: 100%;
          cursor: pointer;
        }

        .visually-hidden {
          border: 0;
          clip: rect(1px, 1px, 1px, 1px);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      `}</style>
    </section>
  )
}

TribeMember.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.array,
  bio: PropTypes.node,
  neonSeparatorColour: PropTypes.oneOf(c_NEONS),
  // Inherited prop types
  image: ShimlessImg.propTypes.fluid,
  headingLevel: Heading.propTypes.level,
}

TribeMember.defaultProps = {
  skills: [],
}

export default TribeMember
