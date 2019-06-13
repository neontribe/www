import React from 'react'
import PropTypes from 'prop-types'
import { PAGE_WIDTH_REM } from '../../theme'

const ConstrainedWidth = ({ children }) => (
  <div className="root">
    {children}
    <style jsx>{`
      .root {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM}rem;
        margin: auto;
      }
    `}</style>
  </div>
)

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
}

export default ConstrainedWidth
