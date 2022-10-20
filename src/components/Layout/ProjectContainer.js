import React from 'react'
import PropTypes from 'prop-types'

import { PAGE_WIDTH_REM } from '../../theme'

const ProjectContainer = ({ children }) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        padding: 2rem;
      }
    `}</style>
  </div>
)

ProjectContainer.propTypes = {
  children: PropTypes.node,
}

export default ProjectContainer
