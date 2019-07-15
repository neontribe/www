import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useFocusStyles from '../../focus'

import { c_PRIMARY_TEXT } from '../../theme'

const CarouselControl = ({ children, onClick, label }) => {
  const focusStyle = useFocusStyles()

  return (
    <button
      className={classNames('carousel_control', focusStyle.className)}
      onClick={onClick}
      aria-label={label}
    >
      {children}
      <style jsx>{`
        .carousel_control {
          background: none;
          border: 0;
          font-family: inherit;
          font-size: 2rem;
          color: ${c_PRIMARY_TEXT};
          cursor: pointer;
          user-select: none;
        }
      `}</style>
      {focusStyle.styles}
    </button>
  )
}

CarouselControl.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default CarouselControl
