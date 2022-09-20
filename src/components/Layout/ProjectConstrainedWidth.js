import React from 'react'
import PropTypes from 'prop-types'

import { PAGE_WIDTH_REM } from '../../theme'

const ProjectConstrainedWidth = ({ children, background }) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        border-radius: 38px;

        ${background ? `background-color: ${background};` : ''}
      }
    `}</style>
  </div>
)

ProjectConstrainedWidth.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
}

export default ProjectConstrainedWidth
