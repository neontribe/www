import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { fontSizes } from '../theme'

import arc from '../components/pinkArc.png'

// TODO: Should we have a block level version which uses a 0 margin p?
const Good = ({
  children,
  weight,
  size,
  align,
  color,
  hyphenation = false,
  lineHeight,
}) => (
  <span className={classNames('text', hyphenation && 'hyphenation')}>
    {children}

    <style jsx>{`
      .text {
        ${weight ? `font-weight: ${weight};` : ''}
        ${color ? `color: ${color};` : ''}
        ${fontSizes[size] ? `font-size: ${fontSizes[size]};` : ''}
        ${lineHeight ? `line-height: ${lineHeight};` : ''}
        ${align ? `text-align: ${align};` : ''}
        position:relative;
        display: inline-block;
      }

      .text:after {
        content: '';
        position: absolute;
        background-image: url('${arc}');
        background-size: 128px 65px;
        background-position: left;

        width: 8.1rem;
        height: 4.1rem;
        background-repeat: no-repeat;
        top: 6rem;

        left: 0.9rem;
      }

      .hyphenation {
        word-break: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
      }

      @media (max-width: 500px) {
        .text:after {
          background-size: 90px 45px;
          top: 3.5rem;
          max-width: 90px;
          left: 0.25rem;
        }
      }
    `}</style>
  </span>
)

Good.propTypes = {
  children: PropTypes.node,
  weight: PropTypes.oneOf([400, 500, 700]),
  align: PropTypes.string,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(fontSizes)),
}

export default Good
