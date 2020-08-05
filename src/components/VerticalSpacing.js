import React from 'react'
import PropTypes from 'prop-types'

const VerticalSpacing = ({ size = 1 }) => (
  <div className="vertical-spacing">
    <style jsx>{`
      .vertical-spacing {
        margin-bottom: ${size / 2}rem;
      }
    `}</style>
  </div>
)

VerticalSpacing.propTypes = {
  size: PropTypes.number,
}

export default VerticalSpacing
