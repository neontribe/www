import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { fontSizes } from '../theme'

const Text = ({
  children,
  weight,
  size,
  align,
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
//default values to avoid any injections?
Text.defaultProps = {
  weight: '400',
  align: 'inherit',
  lineHeight: 'inherit',
  size: 'inherit',
  color: 'inheirt',
}

export default Text
