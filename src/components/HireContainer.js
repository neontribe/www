import React from 'react'
import PropTypes from 'prop-types'

const HireContainer = ({ children }) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        display: flex;
        justify-content: start;
      }

      @media (max-width: 860px) {
        flex-direction: column;
        width: 100%;
      }
    `}</style>
  </div>
)

HireContainer.propTypes = {
  children: PropTypes.node,
}

export default HireContainer
