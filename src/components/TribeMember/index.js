import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FlipCard, { CardFront, CardBack } from '../FlipCard'
import TribeMemberFront from './TribeMemberFront'
import TribeMemberBack from './TribeMemberBack'

const TribeMember = ({ image, name, skills, bio, social }) => {
  const [isFlipped, setFlipped] = useState(false)

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
            image={image}
            name={name}
            skills={skills}
            onClick={() => setFlipped(true)}
          />
        </CardFront>
        <CardBack>
          <TribeMemberBack
            onClick={() => setFlipped(false)}
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
          /* duplicated at Layout/index */
          outline: 1px dashed currentColor;
          outline-offset: 5px;
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
  // Proptypes for gatsby-plugin-images
  image: PropTypes.shape({
    images: PropTypes.object,
    layout: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

TribeMember.defaultProps = {
  skills: [],
}

export default TribeMember
