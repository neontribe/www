import React from 'react'
import PropTypes from 'prop-types'

const PageTop = ({ children }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
        padding-top: 2rem;
        padding-bottom: 4rem;
      }
    `}</style>
  </div>
)
PageTop.propTypes = {
  children: PropTypes.node,
}

export default PageTop
