import React from 'react'
import PropTypes from 'prop-types'

import {
  COLOUR_SECONDARY_TEXT,
  COLOUR_SECONDARY_BACKGROUND,
  CUT_CORNER_PX,
  GUTTER_PX,
} from '../../theme'

const CarouselItem = ({ children }) => {
  return (
    <div className="carousel__item">
      {children}
      <style jsx>{`
        .carousel__item {
          color: ${COLOUR_SECONDARY_TEXT};
          padding: ${GUTTER_PX * 8}px ${GUTTER_PX * 6}px;
          text-align: center;
          background: linear-gradient(
            -45deg,
            transparent ${CUT_CORNER_PX}px,
            ${COLOUR_SECONDARY_BACKGROUND} ${CUT_CORNER_PX}px
          );
        }
      `}</style>
    </div>
  )
}

CarouselItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default CarouselItem
