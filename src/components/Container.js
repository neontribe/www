import React from 'react'
import PropTypes from 'prop-types'

const Container = ({
  children,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  align,
  justifyContent,
}) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        ${paddingRight ? `padding-right: ${paddingRight};` : ''}
        ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
        ${align ? `align-items: ${align};` : ''}
        ${justifyContent ? `justify-content: ${justifyContent};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        display: flex;
      }
    `}</style>
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  justifyContent: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default Container
