import React from 'react'
import PropTypes from 'prop-types'
import { GUTTER_PX } from '../theme'

const VerticalSpacing = ({ size = 1 }) => (
  <div className="vertical-spacing">
    <style jsx>
      {`
        margin-bottom: ${GUTTER_PX * size}px;
      `}
    </style>
  </div>
)

VerticalSpacing.propTypes = {
  size: PropTypes.number,
}

export default VerticalSpacing
