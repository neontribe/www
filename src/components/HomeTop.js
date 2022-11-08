import React from 'react'
import PropTypes from 'prop-types'

const HomeTop = ({ children }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
        min-height: 80vh;
        padding-top: 5vh;
        padding-bottom: 5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
  </div>
)
HomeTop.propTypes = {
  children: PropTypes.node,
}

export default HomeTop
