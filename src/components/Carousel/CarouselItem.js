import React from 'react'
import PropTypes from 'prop-types'

import {
  CUT_CORNER_PX,
  c_SECONDARY_TEXT,
  c_SECONDARY_BACKGROUND,
  GUTTER_PX,
} from '../../theme'

const CarouselItem = ({ children }) => {
  return (
    <div className="carousel__item">
      {children}
      <style jsx>{`
        .carousel__item {
          display: flex;
          flex-direction: column-reverse;
          color: ${c_SECONDARY_TEXT};
          padding: ${GUTTER_PX * 8}px ${GUTTER_PX * 6}px;
          text-align: center;
          background: linear-gradient(
            -45deg,
            transparent ${CUT_CORNER_PX}px,
            ${c_SECONDARY_BACKGROUND} ${CUT_CORNER_PX}px
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
