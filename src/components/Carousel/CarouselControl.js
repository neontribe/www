import React from 'react'
import PropTypes from 'prop-types'

import { c_PRIMARY_TEXT } from '../../theme'

const CarouselControl = ({ children, onClick, label }) => (
  <button className="carousel_control" onClick={onClick} aria-label={label}>
    {children}
    <style jsx>{`
      background: none;
      border: 0;
      font-family: inherit;
      font-size: 2rem;
      color: ${c_PRIMARY_TEXT};
      cursor: pointer;
      user-select: none;
    `}</style>
  </button>
)

CarouselControl.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default CarouselControl
