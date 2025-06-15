import React from 'react'
import css from 'styled-jsx/css'
import { GatsbyImage } from 'gatsby-plugin-image'

import H from '../Heading'
import Text from '../Text'
import VerticalSpacing from '../VerticalSpacing'
import { c_TEXT_DARK } from '../../theme'

const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    flex-grow: 1;
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`

const TribeMemberFront = ({ image, name, skills, onClick }) => (
  <figure className="tribe-figure" onClick={onClick}>
    <div className="image-container">
      {image ? (
        <GatsbyImage
          className={imageStyles.className}
          image={image}
          alt={`${name}'s profile`}
          objectFit="cover"
        />
      ) : (
        <img
          src="https://placeimg.com/700/1000/animals"
          className="fallback-image"
          alt={`${name}'s fallback profile`}
        />
      )}
    </div>

    <VerticalSpacing size={2} />

    <figcaption className="name-skills">
      <Text weight={700} size="medium">
        <H>{name}</H>
      </Text>

      <VerticalSpacing size={1} />

      <Text lineHeight={1.2}>{skills.join(' | ')}</Text>
    </figcaption>

    {imageStyles.styles}

    <style jsx>{`
      .tribe-figure {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      .image-container {
        position: relative;
        height: 100%;
        border-bottom-right-radius: 50px;
        overflow: hidden;
      }

      .name-skills {
        flex-shrink: 0;
        color: ${c_TEXT_DARK};
      }

      .fallback-image {
        flex-grow: 1;
        overflow: hidden;
        display: block;
      }
    `}</style>
  </figure>
)

export default TribeMemberFront
