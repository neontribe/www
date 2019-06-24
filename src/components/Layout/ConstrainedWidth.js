import React from 'react'
import PropTypes from 'prop-types'
import { PAGE_WIDTH_REM } from '../../theme'

const ConstrainedWidth = ({ children }) => (
  <div className="constrained-container">
    {children}
    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin: 0 auto;
        padding: 0 1rem;
      }
    `}</style>
  </div>
)

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
}

export default ConstrainedWidth
