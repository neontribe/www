import React from 'react'
import PropTypes from 'prop-types'

const Top = ({ children }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
        height: 46rem;
      }

      @media (max-width: 1000px) {
        .top {
          padding-left: 2rem;
          margin-right: auto;
          margin-left: auto;
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
