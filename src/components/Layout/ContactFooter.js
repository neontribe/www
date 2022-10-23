import React from 'react'
import PropTypes from 'prop-types'

const ConstrainedWidth = ({ children, background, paddingTop }) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        ${background ? `background-color: ${background};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
    `}</style>
  </div>
)

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  paddingTop: PropTypes.string,
}

export default ConstrainedWidth
