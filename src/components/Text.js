import React from 'react'
import PropTypes from 'prop-types'
import {
  fontSizes,
  COLOUR_PRIMARY_TEXT,
  COLOUR_PRIMARY_BACKGROUND,
  COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE,
  COLOUR_SECONDARY_TEXT,
  COLOUR_SECONDARY_BACKGROUND,
} from '../theme'

const Text = ({
  type = 'primary',
  alternate,
  transparent,
  children,
  heavy,
  size,
}) => (
  <span
    className={[
      type,
      heavy && 'heavy',
      transparent && 'transparent',
      alternate && 'alternate',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
    <style jsx>{`
      span {
        display: inline-block;
        color: ${alternate ? COLOUR_SECONDARY_TEXT : COLOUR_PRIMARY_TEXT};
        padding: 2px 1rem;
        line-height: 1.5;
        font-size: ${fontSizes[size] || 'inherit'};
      }

      .heavy {
        font-weight: 700;
        font-size: 1.25rem;
      }

      /* text color */
      .primary {
        color: ${COLOUR_PRIMARY_TEXT};
      }
      .secondary {
        color: ${COLOUR_SECONDARY_TEXT};
      }
      /* transparency */
      .primary:not(.transparent) {
        background-color: ${COLOUR_PRIMARY_BACKGROUND};
      }
      .alternate:not(.transparent) {
        background-color: ${COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE};
      }
      .secondary:not(.transparent) {
        background-color: ${COLOUR_SECONDARY_BACKGROUND};
      }
    `}</style>
  </span>
)

Text.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  alternate: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
  heavy: PropTypes.bool,
}

export default Text
