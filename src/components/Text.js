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
  paddingTop,
  paddingLeft,
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
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
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
  // could be a number or string, eg 900 or "bold"
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string,
  lineHeight: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(fontSizes)),
  color: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingLeft: PropTypes.string,
  hyphenation: PropTypes.bool,
}

export default Text
