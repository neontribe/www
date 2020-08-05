import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CarouselControl = ({ children, onClick, label }) => (
  <button
    className={classNames('carousel_control')}
    onClick={onClick}
    aria-label={label}
  >
    {children}

    <style jsx>{`
      .carousel_control {
        background: none;
        border: 0;
        padding: 0;
        font-family: inherit;
        font-size: 2rem;
        cursor: pointer;
        user-select: none;
        color: inherit;
      }
    `}</style>
  </button>
)

CarouselControl.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
}

export default CarouselControl
