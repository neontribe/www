import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { fontSizes } from '../theme'

// TODO: Should we have a block level version which uses a 0 margin p?
const Text = ({
  children,
  weight,
  size,
  align,
  hyphenation = false,
  lineHeight,
}) => (
  <div className={classNames('text', hyphenation && 'hyphenation')}>
    {children}

    <style jsx>{`
      .text {
        ${weight ? `font-weight: ${weight};` : ''}
        ${fontSizes[size] ? `font-size: ${fontSizes[size]};` : ''}
        ${lineHeight ? `line-height: ${lineHeight};` : ''}
        ${align ? `text-align: ${align};` : ''}
      }

      .hyphenation {
        word-break: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
      }
    `}</style>
  </div>
)

Text.propTypes = {
  children: PropTypes.node,
  weight: PropTypes.oneOf([400, 500, 700]),
  align: PropTypes.string,
  lineHeight: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(fontSizes)),
}

export default Text
