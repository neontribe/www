import React, { Children } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'

const findChild = (children, { displayName }) =>
  Children.toArray(children).find(
    child => child.type.displayName === displayName
  )
const cloneWithProps = (node, props) => node && React.cloneElement(node, props)

const FlipCard = ({ children, isFlipped, animTime }) => (
  <div className="card-container">
    <div className="card-body">
      {cloneWithProps(findChild(children, CardBack), { isFlipped })}
      {/* Flip tell the front face to inform the animations */}
      {cloneWithProps(findChild(children, CardFront), { isFlipped })}
    </div>
    <style jsx>{`
      .card-body {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all ${animTime}s linear;
        transform: ${isFlipped ? 'rotate3d(0, 1, 0, -180deg)' : 'none'};
        display: flex;
      }

      .card-body::after {
        content: '';
        display: block;
        clear: both;
      }

      .card-container {
        height: 100%;
        position: relative;
        z-index: 1;
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
    z-index: 1;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .card-side + .card-side {
    margin-left: -100%;
  }
`

// Card front
const CardFront = ({ children, isFlipped }) => (
  <div className={`card-side card-front ${isFlipped ? 'is-flipped' : ''}`}>
    {children}
    <style jsx>{cardSideStyles}</style>
    <style jsx>{`
      .card-front.is-flipped {
        pointer-events: none;
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
const CardBack = ({ children, isFlipped }) => (
  <div className="card-side card-back">
    {children}
    <style jsx>{cardSideStyles}</style>
    <style jsx>{`
      .card-back {
        transform: rotate3d(0, 1, 0, 180deg);
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
