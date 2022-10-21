import React from 'react'
import PropTypes from 'prop-types'

const arcContainer = ({
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
        display:flex;
        flex-direction: column;
        justify-content: center;
      }

      @media (max-width: 860px) {
        .container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-top: 2rem;
          padding-bottom: 1rem;
        }
      }
    `}</style>
  </div>
)
arcContainer.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default arcContainer
