import React from 'react'
import PropTypes from 'prop-types'

const HomeTop = ({ children }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
        min-height: 80vh;
        padding-top: 15vh;

        display: flex;
        flex-direction: column;

        position: relative;
        height: 95vh;
      }

      @media (max-width: 860px) {
        .top {
          padding-top: 5vh;
        }
      }

      @media (max-width: 680px) {
        .top {
          padding-top: 0;
          height: unset;
        }
      }
    `}</style>
  </div>
)
HomeTop.propTypes = {
  children: PropTypes.node,
}

export default HomeTop
