import React, { Children } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'

const findChild = (children, { displayName }) =>
  Children.toArray(children).find(
    (child) => child.type.displayName === displayName
  )
const cloneWithProps = (node, props) => node && React.cloneElement(node, props)

const FlipCard = ({ children, isFlipped, animTime }) => (
  <div className="card-container">
    <div className="card-body">
      {cloneWithProps(findChild(children, CardBack), { isFlipped, animTime })}
      {/* Flip tell the front face to inform the animations */}
      {cloneWithProps(findChild(children, CardFront), { isFlipped, animTime })}
    </div>
    <style jsx>{`
      .card-body {
        width: 100%;
        height: 100%;
        display: flex;
      }

      .card-body::after {
        content: '';
        display: block;
        clear: both;
      }

      .card-container {
        height: 100%;
        transform-style: preserve-3d;
        position: relative;
        perspective: 1000px;
      }
    `}</style>
  </div>
)

FlipCard.propTypes = {
  // Whether the card is flipped or not
  isFlipped: PropTypes.bool,
  // The children, should be CardFront and CardBack
  children: PropTypes.node,
  // The time it should take for the animation to complete (in seconds)
  animTime: PropTypes.number,
}

FlipCard.defaultProps = {
  animTime: 0.7,
}

// Card sides, TODO: move to another file ---------------------
const cardSideStyles = css`
  .card-side {
    height: 100%;
    width: 100%;
    position: relative;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .card-side + .card-side {
    margin-left: -100%;
  }
`

// Card front
const CardFront = ({ children, isFlipped, animTime }) => (
  <div className="card-side card-front">
    {children}
    <style jsx>{cardSideStyles}</style>
    <style jsx>{`
      .card-front {
        pointer-events: ${isFlipped ? 'none' : 'all'};
        transform: ${isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'}
          translateZ(0px);
        transition: all ${animTime}s linear;
      }
    `}</style>
  </div>
)
CardFront.displayName = 'FlipCardFront'
CardFront.propTypes = {
  // Whether the card is flipped or not
  isFlipped: PropTypes.bool,
  // The children, should be CardFront and CardBack
  children: PropTypes.node,
}

// Card back
const CardBack = ({ children, isFlipped, animTime }) => (
  <div className="card-side card-back" aria-hidden={!isFlipped}>
    {children}
    <style jsx>{cardSideStyles}</style>
    <style jsx>{`
      .card-back {
        transform: ${isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'}
          translateZ(0px);
        transition: all ${animTime}s linear;
        pointer-events: ${isFlipped ? 'all' : 'none'};
      }
    `}</style>
  </div>
)
CardBack.displayName = 'FlipCardBack'
CardBack.propTypes = {
  // Whether the card is flipped or not
  isFlipped: PropTypes.bool,
  // The children, should be CardFront and CardBack
  children: PropTypes.node,
}

FlipCard.CardBack = CardBack
FlipCard.CardFront = CardFront

export { CardBack, CardFront }
export default FlipCard
