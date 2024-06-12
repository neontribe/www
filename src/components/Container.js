import React from 'react'
import PropTypes from 'prop-types'

// TODO: replace all flex-box css classes with this component
const Container = ({
  children,
  justifyContent,
  mobileFlexDirection,
  flex = true,
  restrictWidth,
}) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        ${flex ? `justify-content: ${justifyContent}; display: flex;` : ''}
        ${restrictWidth ? `width: 100%; max-width: 60vw;` : 'inherit;'}
      }

      @media (max-width: 860px) {
        .container {
          ${flex && mobileFlexDirection
            ? `flex-direction: ${mobileFlexDirection};`
            : ''}
          max-width: none;
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
