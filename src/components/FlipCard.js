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
      {findChild(children, CardBack)}
      {/* Flip tell the front face to inform the animations */}
      {cloneWithProps(findChild(children, CardFront), { animTime, isFlipped })}
    </div>
    <style jsx>{`
      .card-body {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all ${animTime}s linear;
        transform: ${isFlipped ? 'rotateY(180deg)' : 'none'};
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
    box-shadow: 0 10px 35px rgba(50, 50, 93, 0.1),
      0 2px 15px rgba(0, 0, 0, 0.07);
  }

  .card-side + .card-side {
    margin-left: -100%;
  }
`

// Card front
const CardFront = ({ children, isFlipped, animTime }) => (
  <div className={`card-side card-front ${isFlipped ? 'is-flipped' : ''}`}>
    {children}
    <style jsx>{cardSideStyles}</style>
    <style jsx>{`
      .card-front.is-flipped {
        transition: opacity ${animTime + 0.3}s ease-in,
          visibility ${animTime + 0.05}s linear;
        opacity: 0;
        visibility: hidden;
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
  // The time it should take for the animation to complete (in seconds)
  animTime: PropTypes.number,
}

// Card back
const CardBack = ({ children }) => (
  <div className="card-side card-back">
    {children}
    <style jsx>{cardSideStyles}</style>
    <style jsx>{`
      .card-back {
        z-index: 2;
        transform: rotateY(180deg);
      }
    `}</style>
  </div>
)
CardBack.displayName = 'FlipCardBack'
CardBack.propTypes = {
  // The children, should be CardFront and CardBack
  children: PropTypes.node,
}

FlipCard.CardBack = CardBack
FlipCard.CardFront = CardFront

export { CardBack, CardFront }
export default FlipCard
