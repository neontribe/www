import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  fontSizes,
  c_PRIMARY_TEXT,
  c_PRIMARY_BACKGROUND,
  c_PRIMARY_BACKGROUND_ALTERNATIVE,
  c_SECONDARY_TEXT,
  c_SECONDARY_BACKGROUND,
  GUTTER_PX,
} from '../theme'

// TODO: Should we have a block level version which uses a 0 margin p?
const Text = ({
  type = 'primary',
  alternate,
  transparent,
  children,
  weight = 'normal',
  size = 'normal',
  gutter = 1,
  lineHeight = 1.5,
  underline,
  display = 'inline-block',
  wordBreak = 'normal',
}) => (
  <span
    className={classNames(
      'text',
      type,
      transparent && 'transparent',
      alternate && 'alternate'
    )}
  >
    {children}
    <style jsx>{`
      .text {
        display: ${display};
        color: ${alternate ? c_SECONDARY_TEXT : c_PRIMARY_TEXT};
        padding: 2px ${GUTTER_PX * gutter}px;
        line-height: ${lineHeight};
        letter-spacing: 0.015em;
        font-size: ${fontSizes[size] || 'inherit'};
        font-weight: ${weight};
        text-decoration: ${underline ? 'underline' : 'none'};
        word-break: ${wordBreak};
      }
      /* text color */
      .primary {
        color: ${c_PRIMARY_TEXT};
      }
      .secondary {
        color: ${c_SECONDARY_TEXT};
      }
      /* transparency */
      .primary:not(.transparent) {
        background-color: ${c_PRIMARY_BACKGROUND};
      }
      .alternate:not(.transparent) {
        background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
      }
      .secondary:not(.transparent) {
        background-color: ${c_SECONDARY_BACKGROUND};
      }
    `}</style>
  </span>
)

Text.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  alternate: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
  weight: PropTypes.oneOf([400, 500, 700]),
  underline: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(fontSizes)),
  gutter: PropTypes.number,
  lineHeight: PropTypes.number,
  display: PropTypes.string, // TODO: Remove this.
}

export default Text
