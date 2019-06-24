import React from 'react'
import PropTypes from 'prop-types'
import { PAGE_WIDTH_REM, GUTTER_PX } from '../../theme'

const ConstrainedWidth = ({ fullWidth = true, children }) => (
  <div className="constrained-container">
    {children}
    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin: 0 auto;
        padding: ${fullWidth ? 0 : `0 ${GUTTER_PX * 2}px`};
      }
    `}</style>
  </div>
)

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
}

export default ConstrainedWidth
