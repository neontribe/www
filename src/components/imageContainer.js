import React from 'react'
import PropTypes from 'prop-types'

const imageContainer = ({
  children,
  paddingRight,
  paddingLeft,
  paddingTop,
  mobilePaddingBottom,
  paddingBottom,
  marginTop,
  align,
  windowJustifyContent,
  mobilePaddingRight,
  mobilePaddingLeft,
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
        ${marginTop ? `margin-top: ${marginTop};` : ''}
        display:flex;

      }

      @media (max-width: 860px) {
        .container {
          ${
            windowJustifyContent
              ? `justify-content: ${windowJustifyContent};`
              : ''
          }
          ${
            mobilePaddingBottom ? `padding-bottom: ${mobilePaddingBottom};` : ''
          }
          ${mobilePaddingRight ? `padding-right: ${mobilePaddingRight};` : ''}
          

        }

        @media (max-width: 680px) {
          .container {
            ${mobilePaddingLeft ? `padding-left: ${mobilePaddingLeft};` : ''}

          }}




 
    `}</style>
  </div>
)
imageContainer.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  marginTop: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
  windowJustifyContent: PropTypes.string,
  mobilePaddingRight: PropTypes.string,
  mobilePaddingLeft: PropTypes.string,
}

export default imageContainer
