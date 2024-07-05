import React from 'react'
import PropTypes from 'prop-types'

// TODO: replace all flex-box css classes with this component
const Container = ({
  children,
  flex = true,
  restrictWidth,
  justifyContent,
  mobileFlexDirection,
}) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        ${flex ? `display: flex;` : ''}
        ${flex && justifyContent ? `justify-content: ${justifyContent};` : ''}
        ${restrictWidth ? `width: 100%; max-width: 650px;` : 'inherit;'}
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
