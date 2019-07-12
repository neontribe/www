import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Centered = ({ flex, children }) => (
  <div className={classNames('centered', flex && 'flex')}>
    {children}
    <style jsx>{`
      .centered {
        text-align: center;
      }

      .flex {
        flex-direction: column;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
)

Centered.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.node,
}

export default Centered
