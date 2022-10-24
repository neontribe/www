import React from 'react'
import PropTypes from 'prop-types'

const Top = ({ children }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
      }

      @media (max-width: 1000px) {
        .top {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
    `}</style>
  </div>
)
Top.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default Top
