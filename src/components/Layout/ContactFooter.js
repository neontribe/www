import React from 'react'
import PropTypes from 'prop-types'

import { PAGE_WIDTH_REM } from '../../theme'

const ConstrainedWidth = ({
  children,
  background,

  paddingTop,
  paddingLeft,
}) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        ${background ? `background-color: ${background};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''} 
    `}</style>
  </div>
)

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingLeft: PropTypes.string,
}

export default ConstrainedWidth
