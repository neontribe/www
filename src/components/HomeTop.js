import React from 'react'
import PropTypes from 'prop-types'

const HomeTop = ({ children }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
        min-height: 737px;
      }
    `}</style>
  </div>
)
HomeTop.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  align: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default HomeTop
