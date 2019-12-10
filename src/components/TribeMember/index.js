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
  fluid,
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
        className="toggle visually-hidden"
        type="button"
        onClick={() => setFlipped(!isFlipped)}
      >
        Flip the person card
      </button>
      <FlipCard isFlipped={isFlipped}>
        <CardFront>
          <TribeMemberFront
            fluid={fluid}
            name={name}
            headingLevel={headingLevel}
            skills={skills}
            onClick={() => setFlipped(true)}
            sepColour={initialNeonColour}
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
            preventTabFocus={!isFlipped}
          />
        </CardBack>
      </FlipCard>

      <style jsx>{`
        .tribe-member {
          height: 100%;
          cursor: pointer;
        }

        .toggle:focus :global(+ *) {
          border: 1px solid white;
          outline: 2px solid ${initialNeonColour};
          box-shadow: ${initialNeonColour} 0px 0px 9px;
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
  fluid: ShimlessImg.propTypes.fluid,
  headingLevel: Heading.propTypes.level,
}

TribeMember.defaultProps = {
  skills: [],
}

export default TribeMember
