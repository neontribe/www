import React from 'react'
import PropTypes from 'prop-types'

import {
  COLOUR_SECONDARY_TEXT,
  COLOUR_SECONDARY_BACKGROUND,
  REM_PX,
} from '../../theme'

const CarouselItem = ({ children }) => {
  return (
    <div className="carousel__item">
      {children}
      <style jsx>{`
        .carousel__item {
          background-color: ${COLOUR_SECONDARY_BACKGROUND};
          color: ${COLOUR_SECONDARY_TEXT};
          padding: ${REM_PX * 4}px;
          text-align: center;
          transform: translateY(-25px);
        }
      `}</style>
    </div>
  )
}

CarouselItem.propTypes = {
  children: PropTypes.array,
}

export default CarouselItem
