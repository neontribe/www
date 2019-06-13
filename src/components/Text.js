import React from 'react'
import PropTypes from 'prop-types'
import {
  COLOUR_PRIMARY_TEXT,
  COLOUR_PRIMARY_BACKGROUND,
  COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE,
  COLOUR_SECONDARY_TEXT,
  COLOUR_SECONDARY_BACKGROUND,
} from '../theme'

const Text = ({ type = 'primary', alternate, transparent, children }) => (
  <span className={type}>
    {children}
    <style jsx>{`
      span {
        display: inline-block;
        color: ${alternate ? COLOUR_SECONDARY_TEXT : COLOUR_PRIMARY_TEXT};
        padding: 2px 1rem;
        line-height: 1.5;
      }

      .primary {
        color: ${COLOUR_PRIMARY_TEXT};
        ${!transparent &&
          !alternate &&
          `background-color: ${COLOUR_PRIMARY_BACKGROUND}`};
        ${!transparent &&
          alternate &&
          `background-color: ${COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE}`};
      }
      .secondary {
        color: ${COLOUR_SECONDARY_TEXT};
        ${!transparent && `background-color: ${COLOUR_SECONDARY_BACKGROUND}`};
      }
    `}</style>
  </span>
)

Text.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  alternate: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
}

export default Text
