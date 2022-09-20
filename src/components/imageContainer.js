import React from 'react'
import PropTypes from 'prop-types'

const imageContainer = ({
  children,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  align,
}) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        ${paddingRight ? `padding-right: ${paddingRight};` : ''}
        ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
        ${align ? `align-items: ${align};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
      }
    `}</style>
  </div>
)
imageContainer.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default imageContainer
