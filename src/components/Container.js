import React from 'react'
import PropTypes from 'prop-types'

// TODO: replace all flex-box css classes with this component
const Container = ({ children, justifyContent, mobileFlexDirection }) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        ${justifyContent ? `justify-content: ${justifyContent};` : ''}

        display: flex;
      }

      @media (max-width: 860px) {
        .container {
          ${mobileFlexDirection
            ? `flex-direction: ${mobileFlexDirection};`
            : ''}
        }
      }
    `}</style>
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  justifyContent: PropTypes.string,
  mobileFlexDirection: PropTypes.string,
}

export default Container
