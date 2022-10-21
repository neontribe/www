import React from 'react'
import PropTypes from 'prop-types'

const About = ({
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

      @media (max-width:677px) {
        .container {
          display:block;
          max-width:100%;
          justify-content:center;
          padding-right:1rem;
        }

    `}</style>
  </div>
)

About.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  justifyContent: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default About
