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
      }

      @media (max-width:600px) {
        .container {
       
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

      
      @media (max-width:500px) {
        .container {
          padding:0;
          display:flex;
          flex-direction:row;
          justify-content:center;
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
