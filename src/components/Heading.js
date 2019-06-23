import React from 'react'
import PropTypes from 'prop-types'
import { fontSizes } from '../theme'

const Heading = ({ level = 1, children, size = 'large' }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={`heading`}>
      {children}
      <style jsx>{`
        .heading {
          padding: 0;
          margin: 0;
          line-height: 1.2;
          font-size: ${fontSizes[size]};
        }
      `}</style>
    </HeadingTag>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
}

export default Heading
