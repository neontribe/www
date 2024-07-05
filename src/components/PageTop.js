import React from 'react'
import PropTypes from 'prop-types'

const PageTop = ({ children, bannerPresent }) => (
  <div className="top">
    {children}

    <style jsx>{`
      .top {
        background-color: black;
        padding-top: 2rem;
        padding-bottom: ${bannerPresent ? '0' : '4rem'};
        position: relative;
        height: 100%;
      }

      @media (max-width: 530px) {
        .top {
          padding-top: 0;
        }
      }
    `}</style>
  </div>
)
PageTop.propTypes = {
  children: PropTypes.node,
}

export default PageTop
