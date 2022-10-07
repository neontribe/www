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
  color,
  hyphenation = false,
  lineHeight,
  maxCharacter,
  paddingRight,
  paddingLeft,
  paddingTop,
}) => (
  <div className={classNames('text', hyphenation && 'hyphenation')}>
    {children}

    <style jsx>{`
      .text {
        ${weight ? `font-weight: ${weight};` : ''}
        ${fontSizes[size] ? `font-size: ${fontSizes[size]};` : ''}
        ${lineHeight ? `line-height: ${lineHeight};` : ''}
        ${align ? `text-align: ${align};` : ''}
        ${color ? `color: ${color};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        ${paddingRight ? `padding-right: ${paddingRight};` : ''}

        ${maxCharacter ? `max-width: ${maxCharacter};` : ''}
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
  maxCharacter: PropTypes.string,
  whiteSpace: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
}

export default Text
