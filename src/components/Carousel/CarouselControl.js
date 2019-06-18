import React from 'react'
import PropTypes from 'prop-types'

import { COLOUR_PRIMARY_TEXT } from '../../theme'

const CarouselControl = ({ children, onClick }) => (
  <button className="carousel_control" onClick={onClick}>
    {children}
    <style jsx>{`
      background: none;
      border: 0;
      font-family: inherit;
      font-size: 2rem;
      color: ${COLOUR_PRIMARY_TEXT};
      cursor: pointer;
      user-select: none;
    `}</style>
  </button>
)

CarouselControl.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func,
}

export default CarouselControl
