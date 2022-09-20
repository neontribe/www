import React from 'react'
import PropTypes from 'prop-types'

const Container = ({
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
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
)
Container.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default Container
