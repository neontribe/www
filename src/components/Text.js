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
  lineHeight,
  color,
  hyphenation = false,
}) => (
  <div className={classNames('text', hyphenation && 'hyphenation')}>
    {children}

    <style jsx>{`
      .text {
        ${weight ? `font-weight: ${weight};` : ''}
        ${fontSizes[size] ? `font-size: ${fontSizes[size]};` : ''}

        ${align ? `text-align: ${align};` : ''}
        ${color ? `color: ${color};` : ''}
        ${lineHeight ? `line-height: ${lineHeight};` : ''}
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
  weight: PropTypes.string,
  align: PropTypes.string,
  lineHeight: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(fontSizes)),
  color: PropTypes.string,
}

Text.defaultProps = {
  weight: '400',
  align: 'inherit',
  lineHeight: 'inherit',
  size: 'inherit',
  color: 'inheirt',
}

export default Text
