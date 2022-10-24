import React from 'react'
import PropTypes from 'prop-types'

import { PAGE_WIDTH_REM } from '../../theme'

const ConstrainedWidth = ({
  children,
  background,
  paddingTop,
  paddingLeft,
  paddingRight,
}) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin-left: auto;
        margin-right: auto;
        border-radius: 0 0 38px 0;
        padding-bottom: 2rem;

        ${background ? `background-color: ${background};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''} 
        ${paddingRight ? `padding-right: ${paddingRight};` : ''}
      }

      @media (max-width: 1100px) {
        .constrained-container {
          padding-left: 1rem;
        }
      }
    `}</style>
  </div>
)

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
}

export default ConstrainedWidth
