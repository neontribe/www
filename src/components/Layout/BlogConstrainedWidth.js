import React from 'react'
import PropTypes from 'prop-types'

import { PAGE_WIDTH_REM } from '../../theme'

const BlogConstrainedWidth = ({ children, background }) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin-left: auto;
        margin-right: auto;

        ${background ? `background-color: ${background};` : ''}
      }
    `}</style>
  </div>
)

BlogConstrainedWidth.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
}

export default BlogConstrainedWidth
